import { SalesImages } from "../../entities/salesAd.entity";
import {
    TSalesAdRequest,
    TSalesWithImages,
} from "../../interface/salesAd.interfaces";
import repositories from "../../utils";

const updateById = async (
    salesAdId: string,
    salesAdData: TSalesAdRequest
): Promise<TSalesWithImages> => {
    if (salesAdData.price) {
        salesAdData = {
            ...salesAdData,
            price: salesAdData.price * 100,
        };
    }

    const { salesImages, ...salesAd } = salesAdData;

    if (salesImages) {
        const sales = await repositories.salesAdRepo.findOne({
            where: {
                id: salesAdId,
            },
        });

        await repositories.salesImageRepo
            .createQueryBuilder()
            .delete()
            .from(SalesImages)
            .where("salesAdId = :id", { id: salesAdId })
            .execute();

        for (const image of salesImages) {
            const newImage = repositories.salesImageRepo.create(image);
            newImage.salesAd = sales!;

            await repositories.salesImageRepo.save(newImage);
        }
    }

    if (Object.keys(salesAd).length != 0) {
        await repositories.salesAdRepo.update({ id: salesAdId }, salesAd);
    }

    const updatedSales = await repositories.salesAdRepo.findOne({
        relations: {
            salesImages: true,
        },
        where: {
            id: salesAdId,
        },
        order: {
            salesImages: {
                created_at: "ASC",
            },
        },
    });
    return updatedSales!;
};

export default updateById;
