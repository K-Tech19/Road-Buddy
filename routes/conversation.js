const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

// Routes
router.get("/", controllers.conversation_ctrl.allConversationsShow);
router.get("/message/new/:id", controllers.conversation_ctrl.newMessageShow);
router.post("/message/new/:id", controllers.conversation_ctrl.newMessagePost);
router.get("/:id", controllers.conversation_ctrl.singleConversationShow);


// router.get("/conversation", controllers.conversation_ctrl.allConversationsShow);
// router.get("/conversation/message/new/:id", controllers.conversation_ctrl.newMessageShow);
// router.post("/conversation/message/new/:id", controllers.conversation_ctrl.newMessagePost);
// router.get("/conversation/:id", controllers.conversation_ctrl.singleConversationShow);

module.exports = router;