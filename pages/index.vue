
<template>
  <div class="container">
    <div class="header">Loan Request</div>
    <form class="loan-form">
      <div class="form-group">
        <label>Loan Amount</label>
        <UInput v-model="l" color="primary" variant="outline" placeholder="Enter Loan Amount..." />
      </div>
      <div class="form-group">
        <label>Collateral ID</label>
        <UInput v-model="cid" color="primary" variant="outline" placeholder="Enter Collateral ID..." />
      </div>
      <div class="form-group">
        <label>Collateral Contract</label>
        <UInput v-model="cc" color="primary" variant="outline" placeholder="Enter Collateral Contract..." />
      </div>
      <div class="form-group">
        <label>Loan Duration (Days)</label>
        <UInput v-model="ld" color="primary" variant="outline" placeholder="Enter Loan Duration in days..." />
      </div>
      <div class="form-group">
        <label>Lender Address</label>
        <UInput v-model="la" color="primary" variant="outline" placeholder="Enter Lender Address..." />
      </div>
      <UButton @click="create" class="button">Request Loan</UButton>
    </form>
    <br>
    <form class="repay-form">
      <UInput v-model="lid" color="primary" variant="outline" placeholder="Enter Loan ID..." />
      <UButton @click="repay" class="button">Repay Loan</UButton>
    </form>
  </div>
</template>






<script setup lang="ts">
import { createThirdwebClient, getContract, prepareContractCall, resolveMethod, sendTransaction, toWei } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { readContract } from "thirdweb";
import { createWallet, injectedProvider } from "thirdweb/wallets";

const runtimeConfig = useRuntimeConfig()

const client = createThirdwebClient({
  clientId: runtimeConfig.public.thirdwebClientId,
});

const contract = await getContract({
  client,
  chain: sepolia,
  address: runtimeConfig.public.contractAddress,
});



const wallet = createWallet("io.metamask");

const l = ref('')
const cid = ref('')
const cc = ref('')
const ld = ref('')
const la = ref('')
const lid = ref('')




async function create() {
  if (injectedProvider("io.metamask")) {
      // connect the wallet, this returns a promise that resolves to the connected account
      const account = await wallet.connect({
          // pass the client you created with `createThirdwebClient()`
          client,
      });
      console.log(account,'connected succesfully',l,cid,cc,ld,la);

      //code
    try{
      const transaction = await prepareContractCall({
      contract,
      method:
        "function requestLoan(uint256 loanAmount, uint256 collateralId, address collateralContract, uint256 loanDuration, address lender)",
      params: [
        BigInt(l.value),
        BigInt(cid.value),
        cc.value,
        BigInt(ld.value),
        la.value,
      ],
    });
        const { transactionHash } = await sendTransaction({
      transaction,
      account,
    });

    if(!transactionHash)
    {
      console.log('Transaction Failed');
      alert('Transaction Failed');
    } 

    console.log('transactionHash',transactionHash);
    alert('Loan Requested Successfully');
  }
  catch(e)
  {
    console.log('Error',e);
    alert('Error'+e);
  }
  }
  else {
      console.log('Please install MetaMask');
      alert('Please install MetaMask');
  }






}

async function repay()
{
  if (injectedProvider("io.metamask")) {
      // connect the wallet, this returns a promise that resolves to the connected account
      const account = await wallet.connect({
          // pass the client you created with `createThirdwebClient()`
          client,
      });
      console.log(account,'connected succesfully',l,cid,cc,ld,la);

  console.log('from repay',lid);
  //code
  try{
    const transaction = await prepareContractCall({
  contract,
  method: "function repayLoan(uint256 loanId) payable",
  params: [BigInt(lid.value)],
  });
    const { transactionHash } = await sendTransaction({
      transaction,
      account,
    });
    if(!transactionHash)
    {
      console.log('Transaction Failed');
      alert('Transaction Failed');
    } 

    console.log('transactionHash',transactionHash);
    alert('Loan Requested Successfully');
    }
  
  catch(e)
  {
    console.log('Error',e);
    alert('Error'+e);
  }
}
  else {
  console.log('Please install MetaMask');
  alert('Please install MetaMask');
}


  

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #000000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.header {
  font-size: 35px;
  margin-bottom: 20px;
  color: #007bff;
}

.loan-form, .repay-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

UInput {
  width: 100%;
}

.button {
  align-self: center;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
}
</style>
























