const Ticket = require("./../model/ticket-history-model");

const AppError = require("../utils/app-error");
const catchAsync = require("./../utils/catch-async");

exports.createTicket = catchAsync(async (req, res, next) => {
  const newTicket = await Ticket.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      ticket: newTicket,
    },
  });
});

exports.getAllTickets = catchAsync(async (req, res, next) => {
  const tickets = await Ticket.find().populate({
    path: "user",
    select: "name",
  });

  res.status(200).json({
    status: "success",
    results: tickets.length,
    data: {
      tickets,
    },
  });
});
