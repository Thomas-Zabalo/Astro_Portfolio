export function trimText(input: string, maxLength: number = 100): string {
    if (input.length <= maxLength) return input;
    return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInFrance(): Date {
    // Crée un objet Date avec l'heure UTC actuelle
    const now = new Date();

    // Convertit l'heure UTC en heure locale de la France
    const offsetFrance = 2; // La France est en heure d'été d'Europe centrale (UTC+2), mais vous devrez peut-être ajuster cela en fonction de l'heure d'été
    now.setHours(now.getUTCHours() + offsetFrance);

    return now;
}

export function formatTimeForFrance(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Paris", // Utilise le fuseau horaire de la France
    };

    let formattedTime = new Intl.DateTimeFormat("fr-FR", options).format(date);

    // Ajoute l'abréviation du fuseau horaire. Vous pouvez automatiser cela avec des bibliothèques comme `moment-timezone`.
    // Pour simplifier, j'ajoute simplement "CET", mais rappelez-vous que la France passe entre CET et CEST.
    formattedTime += " UTC";

    return formattedTime;
}


export function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}