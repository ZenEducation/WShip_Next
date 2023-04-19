module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

    darkMode: "class",
    theme: {
        borderColor: (theme) => ({
            ...theme("colors"),
            DEFAULT: "#e2e8f0",
        }),
        extend: {
            colors: {
                theme: {
                    1: "#3A8DF5",
                    2: "#F1F6FB",
                    3: "#FAFBFF",
                    4: "#EEF0F4",
                    5: "#E6ECF1",
                    6: "#A5CCFF",
                    7: "#F3F3F5",
                    9: "#91C714",
                    10: "#3160D8",
                    11: "#F78B00",
                    12: "#FBC500",
                    28: "#3b5998",
                    29: "#4ab3f4",
                    30: "#517fa4",
                    31: "#0077b5",
                },
                dark: {
                    1: "#293145",
                    2: "#232a3b",
                    3: "#313a55",
                    4: "#303748",
                    5: "#3f4865",
                    6: "#2b3348",
                },
                gray: {
                    100: "#f7fafc",
                    200: "#edf2f7",
                    300: "#e2e8f0",
                    400: "#cbd5e0",
                    500: "#a0aec0",
                    600: "#718096",
                    700: "#4a5568",
                    800: "#2d3748",
                    900: "#1a202c",
                },
            },
            fontFamily: {
                roboto: ["Roboto"],
            },
            container: {
                center: true,
            },
            maxWidth: {
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                xxl: "1600px",
                
            },
            strokeWidth: {
                0.5: 0.5,
                1.5: 1.5,
                2.5: 2.5,
            },
        },
    },
    variants: {
        extend: {
            zIndex: ["responsive", "hover"],
            position: ["responsive", "hover"],
            padding: ["responsive", "last"],
            margin: ["responsive", "last"],
            borderWidth: ["responsive", "last"],
            backgroundColor: [
                "last",
                "first",
                "odd",
                "responsive",
                "hover",
                "dark",
            ],
            borderColor: [
                "last",
                "first",
                "odd",
                "responsive",
                "hover",
                "dark",
            ],
            textColor: ["last", "first", "odd", "responsive", "hover", "dark"],
        },
    },
};
