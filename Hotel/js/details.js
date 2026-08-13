let guests = JSON.parse(localStorage.getItem("guests")) || [];

let needsSave = false;
guests.forEach(function(g){
    if(!g.id){ g.id = Date.now() + Math.floor(Math.random()*1000); needsSave=true; }
});
if(needsSave){ localStorage.setItem("guests", JSON.stringify(guests)); }

let currentIndex = 0;

const pageFrame = document.getElementById("pageFrame");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageIndicator = document.getElementById("pageIndicator");
const overlay = document.getElementById("overlay");
const modalBox = document.getElementById("modalBox");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

let toastTimer = null;
function showToast(message, type){
    toastMsg.textContent = message;
    toast.className = "toast show " + type;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ toast.classList.remove("show"); }, 2600);
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

function formatDateTime(iso){
    if(!iso){ return "Not recorded"; }
    const d = new Date(iso);
    if(isNaN(d.getTime())){ return "Not recorded"; }
    return d.toLocaleString(undefined, { day:"2-digit", month:"short", year:"numeric", hour:"2-digit", minute:"2-digit" });
}

function pageContentHTML(guest, pageNum, total){
    const isIn = !!guest.checkIn;
    return `
        <span class="status-badge-top ${isIn ? "in" : "out"}">${isIn ? "&#128994; CHECKED IN" : "&#128308; CHECKED OUT"}</span>

        <div class="entry-label">Guest Name</div>
        <div class="entry-value name">${escapeHtml(guest.name)}</div>

        <div class="entry-label">Mobile Number</div>
        <div class="entry-value">${escapeHtml(guest.mobile)}</div>

        <div class="entry-label">Email</div>
        <div class="entry-value">${escapeHtml(guest.email)}</div>

        <div class="entry-label">Check-In</div>
        <div class="entry-value">${escapeHtml(formatDateTime(guest.checkInTime))}</div>

        <div class="entry-label">Room Number</div>
        <div class="entry-value room-value">${escapeHtml(String(guest.roomNo))}</div>

        <span class="page-number">Page ${pageNum} of ${total}</span>
        <div class="stamp ${isIn ? "" : "show static"}">CHECKED OUT</div>
    `;
}

function emptyPageHTML(){
    return `
        <div class="empty-page">
            <div class="quill">&#10002;</div>
            <h3>The register is empty</h3>
            <p>No guests have been written into the diary yet.</p>
            <a href="index.html">Add a Guest</a>
        </div>
    `;
}

function escapeHtml(str){
    const div = document.createElement("div");
    div.textContent = str === undefined || str === null ? "" : str;
    return div.innerHTML;
}

function renderPage(index, direction){
    const total = guests.length;

    if(total === 0){
        pageFrame.innerHTML = `<div class="page" id="activePage">${emptyPageHTML()}</div>`;
        pageIndicator.textContent = "Page 0 of 0";
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }

    currentIndex = Math.max(0, Math.min(index, total - 1));
    const guest = guests[currentIndex];

    const oldPage = document.getElementById("activePage");

    const newPage = document.createElement("div");
    newPage.className = "page" + (guest.checkIn ? "" : " archived");
    newPage.id = "activePageIncoming";
    newPage.innerHTML = pageContentHTML(guest, currentIndex + 1, total);
    attachEditFab(newPage, guest);

    if(!oldPage || !direction){
        newPage.id = "activePage";
        pageFrame.innerHTML = "";
        pageFrame.appendChild(newPage);
    } else {
        pageFrame.appendChild(newPage);
        if(direction === "next"){
            oldPage.classList.add("flip-out");
            newPage.classList.add("flip-in");
        } else {
            oldPage.classList.add("flip-out-rev");
            newPage.classList.add("flip-in-rev");
        }
        setTimeout(function(){
            if(oldPage && oldPage.parentNode){ oldPage.parentNode.removeChild(oldPage); }
            newPage.id = "activePage";
        }, 560);
    }

    pageIndicator.textContent = `Page ${currentIndex + 1} of ${total}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === total - 1;
}

function attachEditFab(pageEl, guest){
    const fab = document.createElement("button");
    fab.className = "edit-fab";
    fab.title = "Edit guest";
    fab.innerHTML = "&#9998;";
    fab.addEventListener("click", function(e){
        e.stopPropagation();
        openEditChoice(guest.id);
    });
    pageEl.appendChild(fab);
}

prevBtn.addEventListener("click", function(){
    if(currentIndex > 0){ renderPage(currentIndex - 1, "prev"); }
});
nextBtn.addEventListener("click", function(){
    if(currentIndex < guests.length - 1){ renderPage(currentIndex + 1, "next"); }
});

document.addEventListener("keydown", function(e){
    if(overlay.classList.contains("show")){ return; }
    if(e.key === "ArrowRight"){ nextBtn.click(); }
    if(e.key === "ArrowLeft"){ prevBtn.click(); }
});

let dragStartX = null;
pageFrame.addEventListener("pointerdown", function(e){
    dragStartX = e.clientX;
});
pageFrame.addEventListener("pointerup", function(e){
    if(dragStartX === null){ return; }
    const diff = e.clientX - dragStartX;
    dragStartX = null;
    if(Math.abs(diff) < 50){ return; }
    if(diff < 0){ nextBtn.click(); } else { prevBtn.click(); }
});

searchInput.addEventListener("input", function(){
    const q = searchInput.value.trim().toLowerCase();

    if(!q){
        suggestions.classList.remove("show");
        suggestions.innerHTML = "";
        return;
    }

    const matches = guests
        .map(function(g, i){ return { g: g, i: i }; })
        .filter(function(item){ return item.g.name.toLowerCase().includes(q); });

    if(matches.length === 0){
        suggestions.innerHTML = `<div class="suggestion-item" style="cursor:default;">No guest found</div>`;
        suggestions.classList.add("show");
        return;
    }

    suggestions.innerHTML = matches.map(function(item){
        return `<div class="suggestion-item" data-index="${item.i}">
            <span>${escapeHtml(item.g.name)}</span>
            <span class="room">Room ${escapeHtml(String(item.g.roomNo))}</span>
        </div>`;
    }).join("");
    suggestions.classList.add("show");

    const firstIdx = matches[0].i;
    if(firstIdx !== currentIndex){
        renderPage(firstIdx, firstIdx > currentIndex ? "next" : "prev");
    }
});

suggestions.addEventListener("click", function(e){
    const item = e.target.closest(".suggestion-item");
    if(!item || item.dataset.index === undefined){ return; }
    const idx = parseInt(item.dataset.index, 10);
    renderPage(idx, idx > currentIndex ? "next" : "prev");
    suggestions.classList.remove("show");
    searchInput.value = "";
});

document.addEventListener("click", function(e){
    if(!e.target.closest(".search-wrap")){
        suggestions.classList.remove("show");
    }
});

function openEditChoice(guestId){
    openOverlay(`
        <div class="modal-icon gold">&#9998;</div>
        <h3>Manage Guest</h3>
        <p>What would you like to do with this record?</p>
        <button class="choice-btn" id="choiceEdit">&#9998;&nbsp;&nbsp;Edit Details</button>
        <button class="choice-btn danger" id="choiceCheckout">&#128682;&nbsp;&nbsp;Check Out</button>
        <button class="choice-btn" id="choiceCancel">&#10060;&nbsp;&nbsp;Cancel</button>
    `);

    document.getElementById("choiceEdit").addEventListener("click", function(){ openEditForm(guestId); });
    document.getElementById("choiceCheckout").addEventListener("click", function(){ openCheckoutConfirm(guestId); });
    document.getElementById("choiceCancel").addEventListener("click", closeOverlay);
}

function openEditForm(guestId){
    const guest = guests.find(function(g){ return g.id === guestId; });
    if(!guest){ closeOverlay(); return; }

    openOverlay(`
        <h3>Edit Guest</h3>
        <div class="form-field">
            <label>Guest Name</label>
            <input type="text" id="editName" value="${escapeHtml(guest.name)}">
        </div>
        <div class="form-field">
            <label>Mobile Number</label>
            <input type="tel" id="editMobile" value="${escapeHtml(guest.mobile)}">
        </div>
        <div class="form-field">
            <label>Email</label>
            <input type="email" id="editEmail" value="${escapeHtml(guest.email)}">
        </div>
        <div class="form-field">
            <label>Room Number</label>
            <input type="text" id="editRoom" value="${escapeHtml(String(guest.roomNo))}">
        </div>
        <div class="row-buttons">
            <button class="btn-secondary" id="editCancel">Cancel</button>
            <button class="btn-primary" id="editSave">Save</button>
        </div>
    `);

    document.getElementById("editCancel").addEventListener("click", closeOverlay);
    document.getElementById("editSave").addEventListener("click", function(){
        const nameVal = document.getElementById("editName").value.trim();
        const mobileVal = document.getElementById("editMobile").value.trim();
        const emailVal = document.getElementById("editEmail").value.trim();
        const roomVal = document.getElementById("editRoom").value.trim();

        if(!nameVal || !mobileVal || !emailVal){
            showToast("Please fill in all fields", "error");
            return;
        }

        guest.name = nameVal;
        guest.mobile = mobileVal;
        guest.email = emailVal;
        guest.roomNo = roomVal || guest.roomNo;

        localStorage.setItem("guests", JSON.stringify(guests));
        closeOverlay();
        showToast("Guest details updated", "success");
        renderPage(currentIndex, null);
    });
}

function openCheckoutConfirm(guestId){
    const guest = guests.find(function(g){ return g.id === guestId; });
    if(!guest){ closeOverlay(); return; }

    openOverlay(`
        <div class="modal-icon error">&#128682;</div>
        <h3>Check out ${escapeHtml(guest.name)}?</h3>
        <p>This guest will be marked as checked out and removed from the register.</p>
        <div class="row-buttons">
            <button class="btn-secondary" id="checkoutCancel">Cancel</button>
            <button class="btn-danger" id="checkoutConfirm">Check Out</button>
        </div>
    `);

    document.getElementById("checkoutCancel").addEventListener("click", closeOverlay);
    document.getElementById("checkoutConfirm").addEventListener("click", function(){
        closeOverlay();
        performCheckout(guestId);
    });
}

function performCheckout(guestId){
    const guest = guests.find(function(g){ return g.id === guestId; });
    if(!guest){ return; }

    const activePage = document.getElementById("activePage");
    const stamp = activePage ? activePage.querySelector(".stamp") : null;
    const badge = activePage ? activePage.querySelector(".status-badge-top") : null;
    const roomValueEl = activePage ? activePage.querySelector(".room-value") : null;

    if(stamp){ stamp.classList.add("show"); }

    if(badge){
        badge.classList.add("badge-transition");
        setTimeout(function(){
            badge.classList.remove("in");
            badge.classList.add("out");
            badge.innerHTML = "&#128308; CHECKED OUT";
        }, 250);
    }

    if(roomValueEl){
        roomValueEl.classList.add("value-transition");
        setTimeout(function(){
            roomValueEl.textContent = "Not Allocated";
        }, 250);
    }

    setTimeout(function(){
        guest.checkIn = false;
        guest.roomNo = "Not Allocated";

        localStorage.setItem("guests", JSON.stringify(guests));

        if(activePage){ activePage.classList.add("archived"); }

        showToast("Guest checked out", "success");
    }, 900);
}

renderPage(0, null);
