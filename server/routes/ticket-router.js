const express = require("express");
const ticketController = require("./../controller/ticketController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .post(ticketController.createTicket)
  .get(ticketController.getAllTickets);

module.exports = router;
