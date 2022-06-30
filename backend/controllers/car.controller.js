import Car from '../models/car.model.js';

export const retrieveAllCars = async (req, res) => {

  const data = await Car.findAll();
  data ? res.json(data) : res.status(404).send({message: 'Cannot retrieve cars'});

}

export const findCarById = async (req, res) => {
    
    const id = req.params.id;
    const car = await Car.findByPk(id);
    car ? res.json(car) : res.status(404).send({
      message: 'Error retrieving Car with id=' + id
    });
} 

export const deleteCar = async (req, res) => {

  try{
    const car = await Car.findByPk(req.params.id);
    await car.destroy();
    res.json({message: 'Car is deleted successfully', severity: 'success'});
  } catch (error) {
    res.json({message: error.message, severity: 'error'});
  }
} 

export const createCar = async (req, res) => {

  const chassisNumber = req.body.chassisNumber;

    if (await Car.findOne({ where: { chassisNumber: chassisNumber } })) {
        res.json({
            message: 'Car with chassis number "' + chassisNumber + '" already exists',
            severity: 'error'
          });

    } else {

        await Car.create(req.body); 
        res.json({
            message: 'Car added successfully!',
            severity: 'success'
          });
    }
  }

export const updateCar = async (req, res) => {

  try { 
    await Car.update(req.body, {
    where: {
      id: req.body.id
    }})
    res.json({message: 'Car is updated successfully', severity: 'success'});
  } catch (error) {
    res.json({message: error.message, severity: 'error'});
  }
}
