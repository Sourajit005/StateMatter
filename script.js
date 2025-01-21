const substances = []; // Array to hold substances
const MatterState = { GASEOUS: "Gaseous", LIQUID: "Liquid", SOLID: "Solid" };

// Display substances in the list
function updateSubstanceDisplay() {
    const display = document.getElementById("substanceDisplay");
    display.innerHTML = "";

    if (substances.length === 0) {
        display.innerHTML = "<li>No substances available.</li>";
    } else {
        substances.forEach((state, index) => {
            display.innerHTML += `<li>Substance ${index + 1}: ${state}</li>`;
        });
    }
}

// Add the new substance
function addSubstance() {
    substances.push(MatterState.GASEOUS);
    updateSubstanceDisplay();
    showMessage("New substance added in Gaseous state.");
}

// Change the state of a substance
function changeState() {
    if (substances.length === 0) {
        showMessage("No substances available to change.");
        return;
    }

    const index = prompt(`Enter substance index (1 to ${substances.length}):`);
    if (index < 1 || index > substances.length || isNaN(index)) {
        showMessage("Invalid index.");
        return;
    }

    if (substances[index - 1] === MatterState.SOLID) {
        showMessage("Substance is in Solid state and cannot be changed.");
        return;
    }

    const newState = prompt("Choose new state: 1. Liquid, 2. Solid, 3. Gaseous");
    switch (parseInt(newState)) {
        case 1:
            substances[index - 1] = MatterState.LIQUID;
            break;
        case 2:
            substances[index - 1] = MatterState.SOLID;
            break;
        case 3:
            substances[index - 1] = MatterState.GASEOUS;
            break;
        default:
            showMessage("Invalid state choice.");
            return;
    }

    updateSubstanceDisplay();
    showMessage(`Substance ${index} state updated.`);
}

// Show state counts
function showStateCounts() {
    const counts = { Gaseous: 0, Liquid: 0, Solid: 0 };
    substances.forEach((state) => counts[state]++);

    showMessage(
        `State Counts:<br>Gaseous: ${counts.Gaseous}<br>Liquid: ${counts.Liquid}<br>Solid: ${counts.Solid}`
    );
}

// Delete a substance
function deleteSubstance() {
    if (substances.length === 0) {
        showMessage("No substances available to delete.");
        return;
    }

    const index = prompt(`Enter substance index to delete (1 to ${substances.length}):`);
    if (index < 1 || index > substances.length || isNaN(index)) {
        showMessage("Invalid index.");
        return;
    }

    if (substances[index - 1] === MatterState.SOLID) {
        showMessage("Substance is in Solid state and cannot be deleted.");
        return;
    }

    substances.splice(index - 1, 1);
    updateSubstanceDisplay();
    showMessage(`Substance ${index} deleted.`);
}

// Show messages
function showMessage(message) {
    const output = document.getElementById("output");
    output.innerHTML = message;
}
