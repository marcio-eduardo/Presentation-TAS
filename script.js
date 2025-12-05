function showDetails(id) {
    const content = document.getElementById('desc-' + id).innerHTML;
    const modal = document.getElementById('mainModal');
    const body = document.getElementById('modal-body');

    body.innerHTML = content;
    modal.style.display = 'flex';
}

function closeModal(event) {
    if (event.target.id === 'mainModal') {
        document.getElementById('mainModal').style.display = 'none';
    }
}

function closeModalBtn() {
    document.getElementById('mainModal').style.display = 'none';
}
