export const HomesView = `    
<div class="container-fluid">
    <div class="row">
        <div class="col-12 text-center">
            <h1>Homes For Sale</h1>
        </div>
    </div>
        <div class="row d-flex justify-content-center" id="homes">
        </div>
    <div class="row justify-content-center">
        <div class="col-8 py-5">
            <form onsubmit="app.HomesController.sellYourHome(event)">
                <div>
                    <label>Name</label>
                    <input type="text" required maxlength="50" minlength="10" name="name" placeholder="Home's Name">
                </div>
                <div>
                    <label>Age</label>
                    <input type="number" required maxlength="100" minlength="1" name="age" placeholder="Home's Age">
                </div>
                <div>
                    <label>Bedrooms</label>
                    <input type="number" required maxlength="40" minlength="1" name="bedrooms" placeholder="Bedrooms">
                </div>
                <div>
                    <label>Bathrooms</label>
                    <input type="number" required maxlength="40" minlength="1" name="bathrooms" placeholder="Bathrooms">
                </div>
                <div>
                    <label>Asking Price</label>
                    <input type="number" required maxlength="10000000000" minlength="1" name="price" placeholder="$0000">
                </div>
                <div>
                    <label>Image</label>
                    <input type="url" maxlength="10000" minlength="1" name="image" placeholder="URL">
                </div>
                <div>
                    <label>Square Feet</label>
                    <input type="number" required maxlength="1000000" minlength="1" name="sqft" placeholder="Square Feet">
                </div>
                <div class="text-center">
                    <div>
                        <label>Description</label>
                        <textarea type="text" maxlength="500" minlength="10" name="description" rows="4"placeholder="Description Here"></textarea>
                    </div>
                    <div>
                        <button class="btn btn-success" type="submit"> Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>`