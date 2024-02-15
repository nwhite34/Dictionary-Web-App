<template>
  <div class="container">
    <div class="nav">
      <div class="nav-items">
        <img src="../assets/iconoir_book.png" alt="logo" class="logo" />
        <div class="nav-items-inner"> 
        <select class="font-selector">
          <option value="Mono">Mono</option>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
        </select>
        <div class="line"> </div>
        <label class="switch">
                <input type="checkbox" id="theme-slider">
                <span class="slider round"></span>
            </label>
          </div>
            <img src="@/assets/icon-moon.svg" alt="Dark mode" class="theme-icon">
      </div>
    </div>


    <div class="word-container"> 


      
    </div>














  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@media screen and (max-width: 390px) {
  .container {
    background-color: blue;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
  }

  .nav {
    background-color: white;
    width: 100%;
    height: 100px;
    display: flex;

  }

  .nav-items {
    display: flex;
    width: 90%;
    align-items: center;

    background-color: white;
    margin: auto;

  }

  .nav-items > img {
    height: 32px;
    width: 36.5px;
  }

  .theme-icon {
  height: 20px !important; /* Adjust the height */
  width: 20px !important; /* Adjust the width */
}



.font-selector {
  border: none;
  color: purple;
}



.line {
  height: 32px;
  width: 1px;
  background-color:#979797;
  margin: 10px 0;
  margin-right: 20px;
  margin-left: 20px;
}

  .nav-items-inner {
  display: flex;
  align-items: center;
  margin-left: auto; /* Pushes the .nav-items-inner to the right */
  padding-right: 10px;
  padding-left: 40px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px; /* Adjust the width */
  height: 20px; /* Adjust the height */
  
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px; /* Adjust the border radius to make it round */
}

.slider.round {
  border-radius: 20px; /* Ensure the roundness matches */
}

.slider.round:before {
  position: absolute;
  content: "";
  height: 16px; /* Adjust the height of the slider handle */
  width: 16px; /* Adjust the width of the slider handle */
  left: 2px; /* Adjust the position of the slider handle */
  bottom: 2px; /* Adjust the position of the slider handle */
  background-color: white;
  transition: 0.4s;
  border-radius: 50%; /* Ensure the slider handle is round */
}


.slider.round:before {
  /* Additional styles for the slider handle */
}

input:checked + .slider.round {
  background-color: #2196f3;
}

input:checked + .slider.round:before {
  transform: translateX(26px);
}


}
</style>
