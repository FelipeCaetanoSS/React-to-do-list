export async function uselessFacts() {
    try {
        const apiFacts = await fetch(
            "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
        );
        const response = await apiFacts.json();
        const target = response.text;
        console.log("teste", target);

        return target;
    } catch (error) {
        console.log("Erro:", error);
    }
}

export async function translate(textTraslate) {
    try {
        const apiTranslate = await fetch(
            "https://deep-translate1.p.rapidapi.com/language/translate/v2",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-RapidAPI-Key":
                        "665850a541msh8ac6c14affa4256p1a5e37jsn0cdd4219ee45",
                    "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
                },
                body: JSON.stringify({
                    q: textTraslate,
                    source: "en",
                    target: "pt",
                }),
            },
        );
        const response = await apiTranslate.json();
        console.log("Tradução", response.data.translations.translatedText[0]);
        return response.data.translations.translatedText[0];
    } catch (error) {
        console.log("erro:", error);
    }
}

export async function ApiTextTranslated() {
    const fact = await uselessFacts();
    const translated = await translate(fact);
    console.log("Api:", translated);
    return translated;
}
