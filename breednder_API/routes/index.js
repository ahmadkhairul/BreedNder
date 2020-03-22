const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");

const AuthController = require("../controllers/auth");
const UserController = require("../controllers/users");
const SpeciesController = require("../controllers/species");
const PetController = require("../controllers/pets");
const MatchController = require("../controllers/matches");
const PremiumController = require("../controllers/premiums");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/auth", auth, AuthController.auth);

router.get("/species", SpeciesController.index);
router.post("/species", SpeciesController.store);
router.delete("/species/:id", SpeciesController.destroy);

router.get("/user", auth, UserController.show);
router.put("/user/:id", auth, UserController.update);
router.delete("/user/:id", auth, UserController.destroy);

router.get("/match/:pet_id&:pet_id_liked", auth, MatchController.show);
router.post("/match", auth, MatchController.store);
router.patch("/match/:id", auth, MatchController.update);
router.get("/matches/:pet_id&:status", auth, MatchController.matches);

router.get("/payment", auth, PremiumController.index);
router.post("/payment", auth, PremiumController.store);
router.put("/payment/:id", auth, PremiumController.update);

router.get("/pets", PetController.index);
router.get("/pet/:id", PetController.show);
router.get("/petuser/", auth, PetController.showByUser);
router.post("/pet", auth, PetController.store);
router.put("/pet/:id", auth, PetController.update);
router.delete("/pet/:id", auth, PetController.destroy);

module.exports = router;
