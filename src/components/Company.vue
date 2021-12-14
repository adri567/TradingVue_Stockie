<template>
  <div class="companybox-style">
    <div class="search">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Search shares"></b-form-input>
      </b-input-group>
    </div>
    <div class="iconAndCompanyBox">
      <div class="icon">
        <img src="../assets/apple.png" style="height: 100%; width:100%; border-radius:100px;">
      </div>
      <div class="companyAbbreviation">
        AAPL
      </div>
      <div class="company">
        Apple Inc.
      </div>
    </div>
    <div class="priceBox">
      <div class="price">
        144.84
      </div>
      <div class="currency">
        USD
      </div>
    </div>
    <div class="sectorbox">
      <div class="sector">
        TECHNOLOGY
      </div>
      <div class="point">
        •
      </div>
      <div class="industry">
        ELECTRONIC COMPUTERS
      </div>
    </div>
    <div class="profil">
      Profil
    </div>
    <div class="webseitebox">
      <div class="webseitename">
        Webseite
      </div>
      <div class="webseitecompany">
        www.apple.com
      </div>
    </div>
    <div class="information">
      Apple Inc. is an American multinational technology company that specializes in consumer electronics, 
      computer software, and online services. Apple is the world's largest technology company by revenue 
      (totalling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. 
      As of 2021, Apple is the world's fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. 
      It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook.
    </div>
  </div>
</template>

<script>

export default {
  name: 'Company',

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.companybox-style {
  height: 87vh;
  width: 100%;
  background-color: rgb(18,24,38); 
  border-radius: 25px;
  box-shadow: 0 0 1em rgb(7, 16, 34);
}
.search {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
  float: left;
}
.iconAndCompanyBox {
  height: 5%;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
}
.icon {
  height: 100%;
  float: left;
  border: 1px;
}
.companyAbbreviation {
  height: 100%;
  float: left;
  margin-left: 10%;
  display: flex; 
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 1.5vw;
}
.company{
  height: 100%;
  float: left;
  margin-left: 5%;
  display: flex; 
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.7vw;
  margin-top: 2%;
}
.priceBox {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  float: left;
}
.price {
  height: 100%;
  float: left;
  display: flex; 
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 1.5vw;

}
.currency {
  height: 100%;
  float: left;
  display: flex; 
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  margin-left: 2%;
  margin-top: 1%;
}
.sectorbox{
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
}
.sector {
  height: 50%;
  float: left;
  display: flex; 
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.6vw;
}
.point {
  height: 50%;
  float: left;
  display: flex;
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.6vw;
  margin-left: 2%;
  margin-right: 2%;
}
.industry {
  height: 50%;
  float: left;
  display: flex; 
  align-items: center;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.6vw;
}
.profil {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 1.5vw;
  float: left;
}
.webseitebox {
  height: 4%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
.webseitename {
  height: 100%;
  width: 50%;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.7vw;
  text-align: left;
  float: left;
}
.webseitecompany {
  height: 100%;
  width: 50%;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.7vw;
  text-align: right;
  float: left;
}
.information {
  height: 30%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
  color: rgb(196,196,196);
  font-family: 'Arial';
  font-size: 0.9vw;
}
</style>