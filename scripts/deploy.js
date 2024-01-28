async function main() {
	const HelloWorld = await ethers.getContractFactory("HelloWorld")

	// Start deployment, returning a promise that resolves to a contract object
	const hello_world = await HelloWorld.deploy("Hello World!")
	console.log("Contract deployed to address: ", hello_world.address)
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})

    // My Smart contract address that was generated
    // Contract deployed to address:  0x2c0E8679Fc8150b6DC86F4ef276624C6ac832B0D