<script>
    export let form;
</script>

<h1>Upload your GPX file below</h1>


<form method="post" enctype="multipart/form-data">
    <input type="file" name="file" /> 
    
    <button type="submit">Upload</button>
</form>

{#if form?.id}
    <p>Successfully uploaded event, id {form?.id}</p>
{/if}