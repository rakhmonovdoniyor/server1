let dataList = [];
const AddNewMotor = (req, res) =>{
    const {name , age} = req.body;
    dataList.push ({name , age});

    console.log(`Add new motor: ${name}, age: ${age}`);
    res.status(201).json({message: "Data reseived", name, age });

};

const getAlldata = (req,res) =>{
    res.status(200).json(dataList)
};

const EditMotor = (req,res) =>{
    const {name ,age } = req.params;
    const {newName, newAge} = req.body;
    const motorName = dataList.find((motor) => motor.name === name)
    if(motorName){
        motorName.name = newName || motorName.name;
        motorName.age = newAge || motorName.age;

        console.log(`Edited name ${name}, to new name ${motorName.name}, new age: ${motorName.age}`);
        res.status(200).json({message: `Update data`, motorName});

    }
    else{
        res.status(404).json({message: `Motor note FOund`})
    }

};


const DeleteMotor = (req,res) =>{
    const {name}  = req.params;
    const index = dataList.findIndex((motor) => motor.name === name)
   
    if(index !== -1) {
        const deleteMotor =dataList.splice(index, 1);
        console.log(`Deleted data ${name}`);
        res.status(200).json({message: `Deleted data`, deleteMotor});
    }
    else{
        res.status(404).json({message: `Motor note delete`})
    }

};

const DeleteAll = async (req, res) => {
    try {
        // console.log('Received request to delete all data');
        datalist = [];
        console.log("All data deleted");
        res.status(200).json({ message: "All data cleared" });
        
    } catch (error) {
        res.status(404).json({message:'problem'})
        
    }
 
};



module.exports = {AddNewMotor,getAlldata , EditMotor, DeleteMotor,DeleteAll};