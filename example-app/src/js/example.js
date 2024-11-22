import { CapacitorSettings } from 'capacitor-settings';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorSettings.echo({ value: inputValue })
}
