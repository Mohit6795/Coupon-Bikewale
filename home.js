
        const changeMode=()=>{
            let mybody = document.body;
            mybody.classList.toggle('mydark')

        }

        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
        function loadCoupon() {
            document.getElementById('mycoupon').style.display="block";
            document.getElementById('searchbar').style.opacity="0.4";
            document.getElementById('browseby').style.opacity="0.4";

        }
        function closeCoupon() {
            document.getElementById('mycoupon').style.display="none";
            document.getElementById('searchbar').style.opacity="1";
            document.getElementById('browseby').style.opacity="1";
        }
  

