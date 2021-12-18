<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" v-on:click="closeModal">&times;</span>
        <h2>No Asset</h2>
      </div>
      <div class="modal-body">
        <p>Please enter asset to show the chart.</p>
        <p>Available assets: AAPL, MSFT, NVDA, TSLA, AMZN</p>
      </div>
      <div class="modal-footer">
        <h2></h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBox",
  methods: {
    closeModal() {
      const modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  font-family: Arial, Helvetica, sans-serif;
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 15%; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid rgb(29, 39, 61);
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

.modal-body {
  font-family: "Arial";
  font-size: 0.9vw;
  font-weight: bold;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 30px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: rgb(29, 39, 61);
  color: white;
  display: inline;
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: rgb(29, 39, 61);
  color: white;
}
</style>
