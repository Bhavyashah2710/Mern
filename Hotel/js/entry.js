const form = document.getElementById("guestForm");
const room = document.getElementById("room");
const check = document.getElementById("checkin");
const overlay = document.getElementById("overlay");
const modalBox = document.getElementById("modalBox");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

let toastTimer = null;

function showToast(message, type){
    toastMsg.textContent = message;
    toast.className = "toast show " + type;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){
        toast.classList.remove("show");
    }, 2600);
}

function openOverlay(html){
    modalBox.innerHTML = html;
    overlay.classList.add("show");
}

function closeOverlay(){
    overlay.classList.remove("show");
}

overlay.addEventListener("click", function(e){
    if(e.target === overlay){ closeOverlay(); }
});

check.addEventListener("change", function(){
    if(check.checked){
        room.disabled = false;
    }
    else{
        room.disabled = true;
        room.value = "";
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const mobileVal = document.getElementById("mobile").value.trim();
    const digitsOnly = mobileVal.replace(/\D/g, "");

    if(digitsOnly.length < 7){
        showToast("Please enter a valid mobile number", "error");
        return;
    }

    const submitBtn = form.querySelector(".btn-primary");
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    setTimeout(function(){
        let guests = JSON.parse(localStorage.getItem("guests")) || [];

        const guest = {
            id: Date.now(),
            name: document.getElementById("name").value.trim(),
            mobile: mobileVal,
            email: document.getElementById("email").value.trim(),
            checkIn: check.checked,
            checkInTime: check.checked ? new Date().toISOString() : null,
            roomNo: check.checked ? room.value : "Not Assigned"
        };

        guests.push(guest);

        localStorage.setItem("guests", JSON.stringify(guests));

        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;

        form.reset();
        room.disabled = true;

        showToast("Guest saved successfully", "success");
    }, 550);
});

function clearData(){
    openOverlay(`
        <div class="modal-icon error">⚠</div>
        <h3>Delete all records?</h3>
        <p>This will permanently remove every guest entry from this device. This action cannot be undone.</p>
        <div class="row-buttons">
            <button class="btn-secondary" onclick="closeOverlay()">Cancel</button>
            <button class="btn-danger" id="confirmClear">Delete All</button>
        </div>
    `);

    document.getElementById("confirmClear").addEventListener("click", function(){
        localStorage.removeItem("guests");
        closeOverlay();
        showToast("All guest data deleted", "success");
    });
}
