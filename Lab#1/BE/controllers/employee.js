const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  const index = employee.findIndex((emp) => emp.id === id);
  employee.splice(index, 1);
  res.status(200).json({ data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const id = req.body.id;
  if (employee.findIndex((emp) => emp.id === id) === -1) {
    const name = req.body.name;
    employee.push({ id, name });
    res.status(200).json({ data: employee });
  } else {
    res.status(201).json({ message: 'ID already exists' });
  }
};
