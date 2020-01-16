<script>
    import SvelteTable from "svelte-table";

    let rows = [
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "iOS", language: "pl", screenshot: "./platform/appstore.jpg", type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Android", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Windows", language: "pl", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Windows", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "iOS", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "iOS", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Windows", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Windows", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Portal", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Android", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "MacOS", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "MacOS", language: "pl", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Windows", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"},
        { link: "https://play.google.com/store/apps/details?id=pl.tajchert.canary", title: "Kanarek", platform: "Portal", language: "de", screenshot: "./platform/playstore.jpg",type: "closed source"}
    ];

    // const columns = [
    //     {
    //         key: "link",
    //         title: "Link",
    //         value: v => v.link,
    //         sortable: true,
    //         filterOptions: rows => {
    //             // generate groupings of 0-10, 10-20 etc...
    //             let nums = {};
    //             rows.forEach(row => {
    //                 let num = Math.floor(row.link);
    //                 if (nums[num] === undefined)
    //                     nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
    //             });
    //             // fix order
    //             nums = Object.entries(nums)
    //                     .sort()
    //                     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //             return Object.values(nums);
    //         },
    //         filterValue: v => Math.floor(v.id / 10),
    //         headerClass: "text-left"
    //     },
    //     {
    //         key: "title",
    //         title: "Name",
    //         value: v => v.title,
    //         sortable: true,
    //         filterOptions: rows => {
    //             // use first letter of title to generate filter
    //             let letrs = {};
    //             rows.forEach(row => {
    //                 let letr = row.title;
    //                 if (letrs[letr] === undefined)
    //                     letrs[letr] = {
    //                         name: `${letr}`,
    //                         value: letr.toLowerCase()
    //                     };
    //             });
    //             // fix order
    //             letrs = Object.entries(letrs)
    //                     .sort()
    //                     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //             return Object.values(letrs);
    //         },
    //         filterValue: v => v.name.charAt(0).toLowerCase()
    //     },
    //     {
    //         key: "platform",
    //         title: "Platform",
    //         value: v => v.platform,
    //         sortable: true,
    //         filterOptions: rows => {
    //             // use first letter of platform to generate filter
    //             let letrs = {};
    //             rows.forEach(row => {
    //                 let letr = row.platform;
    //                 if (letrs[letr] === undefined)
    //                     letrs[letr] = {
    //                         name: `${letr}`,
    //                         value: letr.toLowerCase()
    //                     };
    //             });
    //             // fix order
    //             letrs = Object.entries(letrs)
    //                     .sort()
    //                     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //             return Object.values(letrs);
    //         },
    //         filterValue: v => v.platform.charAt(0).toLowerCase()
    //     },
    //     {
    //         key: "language",
    //         title: "Language",
    //         value: v => v.language, // value for rendering
    //         filterValue: v => v.language, // setup function for filter comparison
    //         filterOptions: rows => {
    //             // use first letter of platform to generate filter
    //             let letrs = {};
    //             rows.forEach(row => {
    //                 let letr = row.language;
    //                 if (letrs[letr] === undefined)
    //                     letrs[letr] = {
    //                         name: `${letr}`,
    //                         value: letr.toLowerCase()
    //                     };
    //             });
    //             // fix order
    //             letrs = Object.entries(letrs)
    //                     .sort()
    //                     .reduce((o, [k, v]) => ((o[k] = v), o), {});
    //             return Object.values(letrs);
    //         },
    //         sortable: true
    //     }
    // ];

</script>
<section>
    <div class="container w-full mx-auto">
        <div class="w-full p-24  md:px-6 text-xl text-gray-800 leading-normal">
            <h1>Community Projects</h1>

<!--            <SvelteTable columns="{columns}" rows="{rows}"/>-->

            <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                {#each rows as row}

                    <!-- Column -->
                    <div class="m-6 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                        <!-- Article -->
                        <article class="overflow-hidden bg-gray-100 rounded-lg shadow-lg">

                            <a href="#">
                                <img alt="{row.link}" class="block h-auto w-full" src={row.screenshot}>

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <p class="text-grey-darker text-sm">
                                    language: {row.language}
                                </p>
                            </header>

                            <footer>

                                <div class="relative px-6 pb-6 mt-6">
                                    <span class="block opacity-75 -mb-1 text-sm">{row.platform}</span>
                                    <div class="flex justify-between">
                                        <span class="block font-semibold text-xl">{row.title}</span>
                                        <span class="block bg-teal-500 rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">{row.type}</span>
                                    </div>
                                </div>
                            </footer>
                            </a>
                        </article>
                        <!-- END Article -->

                    </div>
                    <!-- END Column -->
            {/each}
            </div>

            </div>

            <div class="flex flex-wrap items-center justify-center">
                {#each rows as row}
                    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                             style="transform: scale(1.5); opacity: 0.1;">
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                                  fill="white"/>
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)"
                                  fill="white"/>
                        </svg>
                        <div class="relative pt-10 px-10 flex items-center justify-center">
                            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                 style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
                            <img class="relative w-40"
                                 src={row.screenshot}
                                 alt="">
                        </div>
                        <div class="relative text-white px-6 pb-6 mt-6">
                            <span class="block opacity-75 -mb-1">{row.platform}</span>
                            <div class="flex justify-between">
                                <span class="block font-semibold text-xl">{row.title}</span>
                                <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                            </div>
                        </div>
                    </div>
                {/each}

            </div>
        </div>
    </div>
</section>
