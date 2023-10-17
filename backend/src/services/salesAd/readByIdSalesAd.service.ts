import { SalesAd } from "../../entities/salesAd.entity";
import { TSalesAdResponse } from "../../interface/salesAd.interfaces";
import schemas from "../../schemas";
import repositories from "../../utils";

const readById = async (salesAdId: string): Promise<TSalesAdResponse> => {
    let saleAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: salesAdId,
        },
        relations: {
            salesImages: true,
            user: true,
            comments: {
                user: true,
            },
        },
        order: {
            salesImages: {
                created_at: "ASC",
            },
        },
    });

    saleAd = {
        ...saleAd!,
        price: saleAd!.price / 100,
    };

    return schemas.salesAd.response.parse(saleAd);
};

export default readById;
