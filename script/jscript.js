        // Get the modal

		
		
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var a = document.getElementById("myimg1");
        var b = document.getElementById("myimg2");
		var c = document.getElementById("myimg3");
		var d = document.getElementById("myimg4");
		var t = document.getElementById("caption");
        
		
        function md(){
            event.preventDefault();
            modal.style.display = "flex";
            modalImg.src = this.href;
        };
		
		a.onclick = md;
		b.onclick = md;
		c.onclick = md;
		d.onclick = md;
		

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
          modal.style.display = "none";
        }