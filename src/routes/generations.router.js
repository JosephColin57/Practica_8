//<>
const express = require("express");
const generationUseCase = require("../usecases/generations.usecase");

const router = express.Router();

//GET

router.get("/", async (request, response) => {
  try {
    const generation = await generationUseCase.getAll();
    response.json({
      succes: true,
      message: "All Generation",
      data: { generation },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succces: false,
      error: error.message,
    });
  }
});

//POST

router.post("/", async (request, response) => {
  try {
    const generation = await generationUseCase.create(request.body);
    response.json({
      sucess: true,
      data: { generation },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

//get por Id

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generation = await generationUseCase.getById(id);

    response.json({
      succes: true,
      data: { generation },
    });
  } catch (error) {
    response.status(error.status || 500),
      response.json({
        succes: false,
        error: error.message,
      });
  }
});

//DELETE

router.delete("/:id", async (request, response) => {
  try {
    const { id } = req.params;
    const generationDelete = await generationUseCase.deleteById(id);

    response.json({
      succes: true,
      data: { generation: generationDelete },
    });
  } catch (error) {
    response.status(error.status || 500),
      response.json({
        succes: false,
        error: error.message,
      });
  }
});

// Patch

router.patch("/:id", async (request, response) => {
  try {
    const { id } = req.params;
    const generationUpdate = await generationUseCase.updateById(
      id,
      request.body
    );
    response.json({
      succes: true,
      data: { generation: generationUpdate },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succces: false,
      error: error.message,
    });
  }
});

module.exports = router;
