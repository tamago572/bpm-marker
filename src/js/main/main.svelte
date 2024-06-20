
<script lang="ts">
    import { evalES, evalTS, initBolt } from "../lib/utils/bolt";

    initBolt();

    let sec = 40;
    let bpm = 120;

    let status = "ready";

    let colors = ['Red', 'Yellow', 'Green', 'Blue', 'Violet', 'Magenta', 'Cyan', 'Chartreuse', 'Lime', 'Aquamarine', 'Azure', 'Bluebell', 'Lavender', 'Rose', 'Peach', 'Orange'];
    let selectedColor = colors[0];


    function addMarkers() {
        status = "processing...";
        const addMarkersScript = `
        var player = app.project.activeSequence.getPlayerPosition();
        var seconds = player.seconds;
        var markers = app.project.activeSequence.markers;
        markers.createMarker(seconds);
        var interval = 60 / ${bpm};
        for (var i = 0; i < ${sec}; i += interval) {
            var marker = markers.createMarker(seconds + i);
        
            
        }
        `;
        const result = evalES(addMarkersScript,true);
        console.log(result);
        status = "done";
        // colors.indexOf(selectedColor)
        return result;
    }

    
    
    function removeAllMarkers() {
        const removeAllMarkersScript = `
            var markers = app.project.activeSequence.markers;
            return markers.numMarkers;
        `;
        console.log("マーカー全削除");
        
        
        const result = evalES(removeAllMarkersScript,true);
        return result;
        
    }


</script>

<div class="container">
    <h1 class="fs-4">BPM Marker</h1>
    <form class="mb-3">
        <label for="bpm" class="form-label">BPM</label>
        <input type="number" id="bpm" name="bpm" min="1" max="999" bind:value={bpm} class="form-control"><br>
        <label for="bpm" class="form-label">Number of seconds (秒数)</label>
        <input type="number" id="sec" name="sec" min="1" max="999" bind:value={sec} class="form-control">
    </form>
    
    <div class="panel">
        <button class="btn btn-primary doBtn" id="doBtn" on:click={addMarkers}>Insert</button>
        
        <!-- TODO: 四分音符/八分音符を選択できるようにする -->

        <!-- <button class="btn btn-danger" id="removeBtn" on:click={removeAllMarkers}>Remove all markers</button> -->
        
        <!-- <select name="color" id="color" class="form-select" aria-label="Marker color" style="width: 18%;" bind:value={selectedColor}>
            {#each colors as color}
                <option value={color}>{color}</option>
            {/each}
        </select> -->

    </div>

    
    <div class="alert alert-info" style="margin-top: 24px;">
        status: {status}
        <!-- <br>selectedColor: {selectedColor}<br>
        index: {colors.indexOf(selectedColor)} -->
    </div>

</div>