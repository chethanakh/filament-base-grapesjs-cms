import preset from "./vendor/filament/support/tailwind.config.preset";
import forms from "@tailwindcss/forms";

export default {
    presets: [preset],
    content: [
        "./app/Filament/**/*.php",
        "./resources/views/**/*.blade.php",
        "./vendor/filament/**/*.blade.php",
        "./node_modules/flowbite/**/*.js",
    ],
    plugins: [forms, require("flowbite/plugin")],
};
