<!-- <template>

  <div style="font-size: 35px;">Loan Request</div>
  <br>
  <div>Loan Amount</div>
  <UInput v-model="l" color="primary" variant="outline" placeholder="Enter Loan Amount..." />
  <div>Collateral Id</div>
  <UInput v-model="cid" color="primary" variant="outline" placeholder="Enter Collateral ID..." />
  <div>Collateral Contract</div>
  <UInput v-model="cc" color="primary" variant="outline" placeholder="Enter Collateral Contract..." />
  <div>Loan Duration (Days)</div>
  <UInput v-model="ld" color="primary" variant="outline" placeholder="Enter Loan Duration in days..." />
  <div>Lender Address</div>
  <UInput v-model="la" color="primary" variant="outline" placeholder="Enter Lender Address..." />
  
  <UButton @click="create">Request Loan</UButton>
  <br>
  <br>


  <UInput v-model="lid" color="primary" variant="outline" placeholder="Enter Loan ID..." />
  <UButton @click="repay">Repay Loan</UButton>

    

</template> -->

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


  }
  else {
      console.log('Please install MetaMask');
      alert('Please install MetaMask');
  }

}

async function repay()
{
  console.log('from repay',lid);
  

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
























<!-- <template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Loan Request</h1>
        <form @submit.prevent="submitLoanRequest" class="space-y-4">
          <div>
            <label for="loanAmount" class="block text-sm font-medium text-gray-700">Loan Amount</label>
            <input
              v-model="loanAmount"
              type="number"
              id="loanAmount"
              placeholder="Enter loan amount"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="collateralId" class="block text-sm font-medium text-gray-700">Collateral ID</label>
            <input
              v-model="collateralId"
              type="text"
              id="collateralId"
              placeholder="Enter collateral ID"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="collateralContract" class="block text-sm font-medium text-gray-700">Collateral Contract</label>
            <input
              v-model="collateralContract"
              type="text"
              id="collateralContract"
              placeholder="Enter collateral contract"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="loanDuration" class="block text-sm font-medium text-gray-700">Loan Duration (days)</label>
            <input
              v-model="loanDuration"
              type="number"
              id="loanDuration"
              placeholder="Enter loan duration in days"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label for="lenderAddress" class="block text-sm font-medium text-gray-700">Lender Address</label>
            <input
              v-model="lenderAddress"
              type="text"
              id="lenderAddress"
              placeholder="Enter lender address"
              class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="create">
            Request Loan
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const loanAmount = ref('')
  const collateralId = ref('')
  const collateralContract = ref('')
  const loanDuration = ref('')
  const lenderAddress = ref('')
  



  
  const submitLoanRequest = () => {
    // Here you would typically send the loan request to your backend
    console.log('Loan Request Submitted:', {
      loanAmount: loanAmount.value,
      collateralId: collateralId.value,
      collateralContract: collateralContract.value,
      loanDuration: loanDuration.value,
      lenderAddress: lenderAddress.value
    })
    
    // Reset form fields after submission
    loanAmount.value = ''
    collateralId.value = ''
    collateralContract.value = ''
    loanDuration.value = ''
    lenderAddress.value = ''
  
    // You might want to show a success message to the user here
    alert('Loan request submitted successfully!')
  }
  </script>


  -->