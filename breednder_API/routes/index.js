const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const UserController = require("../controllers/users");
const SpeciesController = require("../controllers/species");
const PetController = require("../controllers/pets");
const MatchController = require("../controllers/matches");
const PremiumController = require("../controllers/premiums");

router.get("/species", SpeciesController.index);
router.post("/species", SpeciesController.store);
router.delete("/species/:id", SpeciesController.destroy);

router.post("/login", UserController.login);
router.post("/register", UserController.register);

router.get("/user/:id", auth, UserController.show);
router.put("/user/:id", auth, UserController.update);
router.delete("/user/:id", auth, UserController.destroy);

router.get("/match/:pet_id&:pet_id_liked", auth, MatchController.show);
router.post("/match", auth, MatchController.store);
router.patch("/match/:id", auth, MatchController.update);
router.get("/matches/:pet_id&:status", MatchController.matches);

router.get("/payment", auth, PremiumController.index);
router.post("/payment", auth, PremiumController.store);
router.put("/payment/:id", auth, PremiumController.update);

router.get("/pets", PetController.index);
router.get("/pet/:id", PetController.show);
router.post("/pet", auth, PetController.store);
router.put("/pet/:id", auth, PetController.update);
router.delete("/pet/:id", auth, PetController.destroy);

module.exports = router;
