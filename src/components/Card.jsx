import React from 'react'


function Card() {

    const dataCard = [
        {
            name: "Pac-man",
            image: "https://zbt4714a.mmiweb.iut-tlse3.fr/wp-content/uploads/2024/11/347976466-7d594da9-68e7-43e4-8856-300fc5cb70df.png",
            link: "https://zbt4714a.mmiweb.iut-tlse3.fr/project/application-de-creation-de-projectnages-pour-le-jeu-baldurs-gate-3/",
            collaborators: [
                { name: "Evan" },
                { name: "Thomas Cerquiera" }
            ],
        },
        {
            name: "Football Américain",
            image: "https://zbt4714a.mmiweb.iut-tlse3.fr/wp-content/uploads/2024/11/347976466-7d594da9-68e7-43e4-8856-300fc5cb70df.png",
            link: "https://zbt4714a.mmiweb.iut-tlse3.fr/project/mon-portfolio-realise-avec-astro/",
            collaborators: ["Lisa", "Clement", "Lucas"],
        },
        {
            name: "Space invadeur ou Sonic",
            image: "https://zbt4714a.mmiweb.iut-tlse3.fr/wp-content/uploads/2024/11/347976466-7d594da9-68e7-43e4-8856-300fc5cb70df.png",
            link: "https://zbt4714a.mmiweb.iut-tlse3.fr/project/creation-dune-template-astro/",
            collaborators: ["Elias", "Théo", "Maxime"],
        },
        {
            name: "Aucun projet",
            image: "https://zbt4714a.mmiweb.iut-tlse3.fr/wp-content/uploads/2024/11/347976466-7d594da9-68e7-43e4-8856-300fc5cb70df.png",
            link: "https://zbt4714a.mmiweb.iut-tlse3.fr/project/creation-dune-template-astro/",
            collaborators: ["Ogene", "Mohammed", "Thomas ZABALO"],
        },
        {
            name: "Application Dessin",
            image: "https://zbt4714a.mmiweb.iut-tlse3.fr/wp-content/uploads/2024/11/347976466-7d594da9-68e7-43e4-8856-300fc5cb70df.png",
            link: "https://zbt4714a.mmiweb.iut-tlse3.fr/project/creation-dune-template-astro/",
            collaborators: ["Safwa"],
        }
    ];

    const avatars = [
        {
            src: "https://www.gravatar.com/avatar/1d7d586c9f650fcd16f43f8c915f97ff?s=96&d=retro&r=g"
        },
        {
            src: "https://www.gravatar.com/avatar/d18d4b8b0735b6637731d2f2a2ab7a1c?s=96&d=retro&r=g"
        },
        {
            src: "https://www.gravatar.com/avatar/33c6d5cb43cf68de1f68a3c3428c4574?s=96&d=retro&r=g"
        },
        {
            src: "https://www.gravatar.com/avatar/8c0c672881a5f8395e56f46a4163e3b4?s=96&d=retro&r=g"
        }
    ];

    return (
        <section className='lg:px-6 pb-12 lg:pb-32'>
            {/* Exemple 1 */}
            <div class="flex justify-between items-center mb-8 lg:mb-28">
                <h2 class="text-xl lg:text-3xl font-bold">Quelques jeux réalisés.</h2>
            </div>
            <section className='hidden md:block'>
                <div id='projet' className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {dataCard.map((project, index) => (
                        <a key={index} href={project.link} className="block p-6 bg-[#EDEEF0] rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <article className="flex flex-col h-full">
                                <h3 className="text-base font-semibold mb-4 hover:text-blue-600">{project.name}</h3>
                                <img className="object-cover w-full h-36 rounded mb-4" src={project.image} alt={project.name} />
                                <div class="flex items-center justify-between space-x-2 mt-auto">

                                    <div class="flex items-center">

                                        <div class="flex -space-x-3 rtl:space-x-reverse">
                                            {project.collaborators.map((collaborator, idx) => (
                                                <img class="inline-block size-6 rounded-full" src={avatars[idx].src} alt={`avatar de ${collaborator.name}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>
            </section>

            {/* Exemple 2 */}
            <section className='md:hidden'>
                <ul role="list" className="divide-y divide-gray-100">
                    {dataCard.map((project) => (
                        <li key={project.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img alt="" src={project.image} className="object-cover size-12 flex-none rounded-md bg-gray-50" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm/6 font-semibold text-gray-900">{project.name}</p>
                                    <div class="flex -space-x-3 rtl:space-x-reverse">
                                        {project.collaborators.map((collaborator, idx) => (
                                            <img class="inline-block size-6 rounded-full" src={avatars[idx].src} alt={`avatar de ${collaborator.name}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                                <button className="rounded-md border-slate-200 py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-300 focus:shadow-none active:bg-slate-300 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                                    Voir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}

export default Card