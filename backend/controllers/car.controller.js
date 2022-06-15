import Car from '../models/car.model.js';

export const retrieveAllCars = async (req, res) => {

  const data = await Car.findAll();
  data ? res.send(data) : res.status(404).send({message: 'Cannot retrieve cars'});

}

export const findCarById = async (req, res) => {
    
    const id = req.params.id;
    const car = await Car.findByPk(id);
    car ? res.send(car) : res.status(404).send({
      message: 'Error retrieving Car with id=' + id
    });
} 

export const deleteCar = async (req, res) => {

    const id = req.params.id;
    const car = await Car.findByPk(id);
    await car.destroy();

} 

export const createCar = async (req, res) => {

    const chassisNumber = req.body.chassisNumber;

    if (await Car.findOne({ where: { chassisNumber: chassisNumber } })) {
        res.send({
            message: 'Car with chassis number "' + chassisNumber + '" already exists'
          });

    } else {

        await Car.create(req.body);
        res.send({
            message: 'Car added successfully!'
          });
    }

} 

export const updateCar = async (req, res) => {

    await Car.update(req.body, {
        where: {
          chassisNumber: req.body.chassisNumber
        }
      });

} 

