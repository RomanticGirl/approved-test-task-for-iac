const Router = require("express");
const router = new Router();
const dataController = require("../controllers/dataController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.get("/data_list", checkRole("ROLE_LIST_VIEW"), dataController.getAll); // возвращает в формате JSON данные для отображения таблицы, с учетом сортировки, пагинации и фильтрации, заданных на клиенте. API доступна только, если у пользователя есть роль ROLE_LIST_VIEW
router.get("/get_data/:id", checkRole("ROLE_EDIT"), dataController.getById); // получение данных для формы редактирования, доступ к апи по роли ROLE_EDIT
router.post("/edit_data", checkRole("ROLE_EDIT"), dataController.createOrEdit); // добавление/изменение записи, доступ к апи по роли ROLE_EDIT
router.post("/delete_data", checkRole("ROLE_DELETE"), dataController.delete); // удаление выбранной записи, доступ к апи по роли ROLE_DELETE

module.exports = router;
