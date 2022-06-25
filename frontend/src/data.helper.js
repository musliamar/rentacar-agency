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
        firstName: 'First name'
    };

    const renamedFieldKeys = Object.keys(fieldsData).reduce((newRenamedKeys, key) => {
        newRenamedKeys[keysToRename[key]] = fieldsData[key];
    }, {});

    return renamedFieldKeys;

};

export default dataHelper;
