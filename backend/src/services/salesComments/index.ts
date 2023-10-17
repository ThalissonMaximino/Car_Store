import createComment from "./createSalesComments.service";
import editComment from "./editSalesComments.service";
import deleteComment from "./deleteSalesComments.service";

const salesCommentsService = {
    createComment,
    editComment,
    deleteComment,
};

export default salesCommentsService;
