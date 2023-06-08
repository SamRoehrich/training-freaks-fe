<nav>
    <div>
        <a href="/">home</a>
        <a href="/upload">upload</a>
    </div>
    <div>
        <a href="/login">login</a>
    </div>
</nav>

<slot />

<style>
    nav {
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
    }
</style>