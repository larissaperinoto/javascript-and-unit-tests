const createStudent = (studant) => {
  const estudante = {
    name: studant,
    feedback: () => {
      const result = 'Eita pessoa boa!';
      return result;
    },
  };
  return estudante;
};

module.exports = createStudent;
