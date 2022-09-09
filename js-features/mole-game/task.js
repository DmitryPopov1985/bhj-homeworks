let killedMoles = 0;
let misses = 0;

targetHole = index => document.getElementById(`hole${index}`);
for(let i = 1; i < 10; i++) {
    let targetHole = document.getElementById('hole' + i);
    targetHole.onclick = () => {
        if (targetHole.className.includes('hole hole_has-mole')) {
            killedMoles += 1;
            document.getElementById('dead').textContent = killedMoles;
            if(killedMoles === 10) {
                alert('Победа!');
                return location.reload();
            }
        } else {
            misses += 1;
            document.getElementById('lost').textContent = misses;
            if(misses === 5) {
                alert('Эх,коряга!');
                return location.reload();
            }
        }
    }
}

