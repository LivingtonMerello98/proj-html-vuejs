<script>
export default {
    name: 'AppForm'
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div>
                        <h2 class="mt-5">Contacts</h2>
                        <div class="mt-3">
                            <p><Strong>Address:</Strong> 11559 Ventura Boulevard, Studio City, CA 91604</p>
                            <p><Strong>Phone:</Strong><a href="/"> 555.748.6051</a></p>
                            <p><Strong>Fax:</Strong><a href="/"> 555.748.6051</a></p>
                            <p><Strong>E-mail:</Strong><a href="/"> quickwind@demolink.org</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-8 mt-5">
                    <h2>Sends us a message</h2>
                    <form>
                        <div class="mb-3 mt-3">
                            <label for="exampleInputPassword1" class="form-label">
                                <h3>Full name</h3>
                            </label>
                            <input type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                <h3>E-mail</h3>
                            </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                <h3>Company</h3>
                            </label>
                            <input type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                <h3>Subject</h3>
                            </label>
                            <input type="text" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">
                                <h3>Your Message</h3>
                            </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
a {
    color: #86CCFF;
    text-decoration: none;
    font-size: 20px;
}

p {
    font-size: 20px;
}
</style>