"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const getAllContacts_1 = require("../../middlewares/apimiddlewares/getAllContacts");
const auth_1 = require("../../middlewares/auth");
router.get("/", auth_1.Auth, getAllContacts_1.getAllContacts);
router.get("/:id", auth_1.Auth, getAllContacts_1.getAContact);
router.post("/", auth_1.Auth, getAllContacts_1.postContacts);
router.delete("/:id", auth_1.Auth, getAllContacts_1.deleteContact);
router.patch("/:id", auth_1.Auth, getAllContacts_1.updateContact);
exports.default = router;
//# sourceMappingURL=contacts.js.map