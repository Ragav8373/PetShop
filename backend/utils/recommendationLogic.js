module.exports = function matchPets(pets, preference) {
  return pets.filter(pet => pet.type === preference);
};
