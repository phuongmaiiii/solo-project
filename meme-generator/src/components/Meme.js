function Meme() {
    return (
        <main>
            <form className="meme--form">
            <input type="text" placeholder="Top text" className="meme--input" />
            <input type="text" placeholder="Bottom text" className="meme--input" />
    
            <button type="submit" className="meme--button">Get a new meme image 🖼️</button>
            </form>
        </main>
    );
}

export default Meme;
