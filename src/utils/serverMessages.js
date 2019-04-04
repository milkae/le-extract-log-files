const date = "\\d{1,2} \\[\\d{2}:\\d{2}:\\d{2}\\]"

const lieux = [
  `${date} Galein'th Aseyis`,
  `${date} Magasin`,
  `${date} Mynadar,?`,
  `${date} Corren,?`,
  `${date} Pierre-Blanche,?`,
  `${date} Taverne `,
  `${date} Vall.e,?`,
  `${date} Zone `,
  `${date} Sc.ne `,
  `${date} Kial Kraw`,
  `${date} Sables `,
  `${date} Guilde `,
  `${date} March. `,
  `${date} Librairie `,
  `${date} Salle `,
  `${date} Kilaran `,
  `${date} Kasteel `,
  `${date} Glakhmor `,
  `${date} Forge `,
  `${date} Cellier `,
  `${date} Passage `,
  `${date} Grand `,
  `${date} Manoir `,
  `${date} Escalier `,
  `${date} Dépôt `,
  `${date} Stock `,
  `${date} Tente `,
  `${date} Campement( |,)`,
  `${date} Chemin `,
  `${date} Bassin `,
  `${date} Hall `,
]

const evenements = [
  `${date} \\w+ vient de se dissiper dans l'.ther\\.$`,
  `${date} \\d+ ((de tes)|ton|ta) .+ a|ont .t. (d.grad.|d.truit)e?s?( en .+)? !$`,
  `${date} \\w+ vient d'.tre la victime d'un .boulement \\(\\d+ points? de d.g.ts\\)\\.$`,
  `${date} \\w+ a trouv. un(e)? .+[\\.!]`,
  "des cr.atures ont .t. aperçues, l'alarme a .t. donn.e\\.$",
  "a .t. notifi., maintenant attends qu'(il|elle) veuille n.gocier avec toi\\.$",
  "par M.re Nature de \\d+ points d'exp.rience de r.colte\\.$",
  `${date} \\w+ a abandonn. la n.gociation\\.$`,
  "mise? . la poubelle\\.$",
  "vient de se connecter\\.$",
  "vient de se d.connecter\\.$",
  "Liens pendant que tu .tais absent :",
  "vient de trouver un sac d'or, contenant \\d{1,2} lumens\\.$",
  "clique sur lui/elle afin d'accepter de n.gocier\\.$",
  "\\w+ vient de se faire .+ et re.oit une dose de poison|venin de \\d+\\.$",
  "aurait du appeler . l'aide, m.me si personne ne se serait d.plac.\\.$",
  ".+ re.oit un coup critique de \\d+ d.g.ts\\.$",
  ".+ re.oit \\d+ d.g.ts( de)? [\\w ]+\\.$",
  ".'+ a .t. assom. (\\d+ secondes)!$",
  "\\w + te d.fi(e)? en duel !$",
  "\\w + a rendu ta peau dure comme le cuir !",
  "[\\w ']+ t'a drain. \\d+ points de mana !$",
  ".+ t'a empoisonn.\\.\\.\\.$",
  "\\w+ t'a b.ni. Tu te sens travers. par une force divine !",
  "[\\w ']+ lance frappe des invoqu.s\\.$",
  ".+ a fui le combat. Sacrebleu ! Rattrapons .+ !",
  "\\w+ a endommag. s(a|on) .+, qui de ce fait est mise? à la poubelle.",
  "\\w+ vient de trouver un sac surprise!",
  "\\w+ vient de voir sa ligne de vie extr.mement raccourcie\\.",
  "\\w+ a trouv. un(e)? .+, et n'a pu l(e|a) prendre car son sac .tait plein\\.$",
  "[\\w ']+ a invoqu. un(e)? .+",
  "\\w+ est d.j. en train de n.gocier avec quelqu'un d'autre",
  ".+ est d.j. en train de combattre, laisse le/la tranquille !",
  "\\w+ veut n.gocier avec toi.",
  ".+ t'a enlev. \\d+ points de vie !$",
  "[\\w ']+ a lanc. Affaiblir sur toi (\\d+ d.g.ts)\\.$",
  `${date} \\w+ a touch. une rune de t.l.portation et nous a quitt.s.`,
  `${date} .+ a r.sist. à ton sort !`,
  `${date} [\\w ']+ a essay. de te jeter un sort, mais a .chou. !`,
]

export default [
  ...lieux,
  ...evenements,
  `${date} Je `,
  `${date} T[uoae][ns]? `,
  `${date} L[ea]s? `,
  `${date} L'`,
  `${date} D[ue]s? `,
  `${date} En `,
  `${date} A `,
  `${date} C[ae] `,
  `${date} Pour `,
  `${date} Il `,
  `${date} On `,
  `${date} Trop `,
  `${date} Une? `,
  `${date} Cela `,
  `${date} Cet(te)? `,
  `${date} [VN]ous `,
  `${date} Ne `,
  `${date} Et `,
  `${date} Pas `,
  `${date} Seul `,
  `${date} Fichiers `,
  `${date} Certains `,
  `${date} $`,
  `${date} Heure `,
  `${date} Nom `,
  `${date} Jour `,
  `${date} Sous `,
  `${date} Bien, `,
  `${date} Hop, `,
  `${date} D.sol., `,
  `${date} Vers `,
  `${date} Es-tu `,
  `${date} Impossible `,
  `${date} Quelqu'un `,
  `${date} Devine `,
  `${date} C'est `,
  `${date} Ici,? `,
  `${date} Ile `,
  `${date} Rien `,
  `${date} Euh|Heu, `,
  `${date} #`,
  `${date} Utilis(e|ant) `,
  `${date} Ecoute `,
  `${date} R.alise `,
  `${date} Appuie `,
  `${date} Presse `,
  `${date} Va `,
  `${date} Connexion `,
  `${date} Encore `,
  `${date} Halte `,
  `${date} Continue,? `,
  `${date} Approche[ -]`,
  `${date} S.lectionne `,
  `${date} Taille `,
  `${date} Bienvenue `,
  `${date} Synchronisation `,
  `${date} Kul'ack, la magie pour tous !`,
  `${date} Alerte !`,
  `${date} Ev.nement `,
  `${date} Rapproche-toi !`,
  `${date} Dr.le `,
  `${date} Emb.tant `,
  `${date} Aucune `,
  `${date} Parfait, `,
  `${date} Objets `,
  `${date} Tiens, `,
  `${date} L'eau`,
  `${date} Attention`,
  `${date} Malheureusement, `,
  `${date} Adonis annonce :`,
  `${date} [\\w-\\.]+$`,
  `${date} [\\w-_]+ marquée$`,
  `${date} Alors `,
  `${date} Tandis `,
  `${date} Bouclier `,
  `${date} Protection `,
  `${date} Attributs `,
  `${date} Syntaxe `,
  `${date} Echange `,
  `${date} .trange,? `,
  `${date} Alias `,
  `${date} Voyons|Allons|Dommage|Oui\\.\\.\\. `,
  `${date} Oui, `,
  `${date} Canal `,
  `${date} R.colte `,
  `${date} Aimerais-tu `,
  `${date} Ing.dients `,
  `${date} L'invocation `,
  `${date} Actuellement, `,
  `${date} Boss `,
  `${date} .quip.es `,
  `${date} [-<]`,
]
