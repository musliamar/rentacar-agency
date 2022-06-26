const dataHelper = (props) => {

    const { id, createdAt, updatedAt, ...fieldsData } = props;

    const keysToRename = {
  
      typeOfCar: 'Type of car',
      chassisNumber: 'Chassis number',
      currentlyRentedToClientId: 'Currently rented to',
      firstRegistration: 'Date of registration',
      manufacturer: 'Manufacturer',
      model: 'Model',
      typeOfFuel: 'Type of fuel',
      yearOfProduction: 'Year of production',
      
    };
  
    const renamedFieldKeys = Object.keys(fieldsData).reduce((newRenamedKeys, key) => {
      newRenamedKeys[keysToRename[key]] = fieldsData[key];
      return newRenamedKeys;
    }, {});

    return renamedFieldKeys;
};

export const revertData = (props) => {

  const { ...fieldsData } = props;

  const revertKeys = {

    'Type of car': 'typeOfCar',
    'Chassis number': 'chassisNumber',
    'Currently rented to': 'currentlyRentedToClientId',
    'Date of registration': 'firstRegistration',
    'Manufacturer': 'manufacturer',
    'Model': 'model',
    'Type of fuel': 'typeOfFuel',
    'Year of production': 'yearOfProduction',
    
  };

  const renamedFieldKeys = Object.keys(fieldsData).reduce((newRenamedKeys, key) => {
    newRenamedKeys[revertKeys[key]] = fieldsData[key];
    return newRenamedKeys;
  }, {});

  return renamedFieldKeys;
};

export default dataHelper;
