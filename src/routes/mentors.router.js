const express = require("express");
const mentorsUseCase = require("../usecases/mentors.usecase");

const router = express.Router();

//GET /mentors

router.get("/", async (request, response) => {
  try {
    const mentors = await mentorsUseCase.getAll();

    response.json({
      success: true,
      data: { mentors },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// POST /mentors

router.post("/", async (request, response) => {
  try {
    const mentorCreated = await mentorsUseCase.create(request.body);

    response.json({
      success: true,
      data: { mentor: mentorCreated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// GET /mentors/:id

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const mentor = await mentorsUseCase.getById(id);
    response.json({
      success: true,
      data: { mentor },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// DELETE /mentors/:id

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const mentorDeleted = await mentorsUseCase.deleteById(id);
    response.json({
      success: true,
      data: { mentor: mentorDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

// PATCH /mentors/:id

router.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const mentorUpdated = await mentorsUseCase.updateById(id, request.body);
    response.json({
      success: true,
      data: { mentor: mentorUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
