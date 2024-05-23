// create a variable to hold your NFT's
let nfts_collection= [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (nft_Name, owner_Name , description, royalities) {
    const nft={
        "name": nft_Name,
        "owner": owner_Name,
        "Description": description,
        "royality": royalities
    }
    nfts_collection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nfts_collection.length;i++){
        console.log(`Name: ${nfts_collection[i].name}, Owner: ${nfts_collection[i].owner}, Description: ${nfts_collection[i].Description} , Royality: ${nfts_collection[i].royality}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
       return nfts_collection.length;
}

// call your functions below this line
mintNFT("NFT 101", "ABC", "First NFT", "10%");
mintNFT("NFT 201", "DEF", "Second NFT", "20%");
mintNFT("NFT 301", "GHI", "Third NFT", "10%");
mintNFT("NFT 401", "XYZ", "Fourth NFT", "15%");
listNFTs();
console.log("Total Supply: ", getTotalSupply());


