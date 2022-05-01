//import

const hre = require("hardhat")

//main function
async function main(){
    const SimpleStorageFactory = await hre.ethers.getContractFactory("SimpleStorage");
    const SimpleStorageConrtact = await SimpleStorageFactory.deploy();

    const number = await SimpleStorageConrtact.number();
    console.log(number.toString());

    const txn = await SimpleStorageConrtact.setNumber("10");
    await txn.wait()

    const updatedNumber = await SimpleStorageConrtact.number()
    console.log(updatedNumber.toString());
}

//run main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });