export interface Breed {
  name: string;
  image: { url: string; alt: string };
  description: string;
  points: string[];
}

export interface Post {
  slug: string;
  title: string;
  content: string;
  details: {
    heading: string;
    description: string;
    points: string[]; // Points for diet/health posts
    breeds?: Breed[]; // Optional breeds array for the "Cat Breeds" post
    image?: { url: string; alt: string }; // Optional image for diet/health posts
  };
}

export const posts: Post[] = [
  // Combined post for Cat Breeds
  {
    slug: "cat-breeds",
    title: "Cat Breeds",
    content: "Learn about different cat breeds including Persian, Siamese, and Maine Coon.",
    details: {
      heading: "Cat Breeds Overview",
      description: "Discover different cat breeds and their unique characteristics. Learn about the Persian, Siamese, and Maine Coon breeds and what makes them special.",
      points: [
        "Each breed has unique characteristics, personalities, and grooming needs.",
        "Some breeds are more sociable, while others are more independent.",
        "Understanding these traits can help you choose the right cat for your home.",
      ],
      breeds: [
        {
          name: "Persian Cat",
          image: { url: "/images/persian.jpg", alt: "Persian Cat" },
          description: "The Persian cat is one of the oldest and most recognizable cat breeds, known for its gentle and affectionate nature.",
          points: [
            "Calm and affectionate.",
            "Good with children and other pets.",
            "Requires regular grooming due to long fur.",
            "Tends to be a low-energy cat.",
          ],
        },
        {
          name: "Siamese Cat",
          image: { url: "/images/siamese.jpeg", alt: "Siamese Cat" },
          description: "Siamese cats are social and vocal, often forming close bonds with their owners. They are very intelligent and curious.",
          points: [
            "Vocal and loves attention.",
            "Very social and bonds with the family.",
            "Intelligent and curious, often playful.",
            "Needs interaction and mental stimulation.",
          ],
        },
        {
          name: "Maine Coon Cat",
          image: { url: "/images/mainecoon.jpeg", alt: "Maine Coon Cat" },
          description: "Maine Coons are friendly, large, and intelligent cats that make excellent family pets due to their good-natured disposition.",
          points: [
            "Large and robust cat breed.",
            "Known for its intelligence and playfulness.",
            "Tolerant and friendly, great with kids and pets.",
            "Requires regular grooming due to thick fur.",
          ],
        },
        {
          name: "Turkish Angora",
          image: { url: "/images/turkish-angora.jpeg", alt: "Turkish Angora Cat" },
          description:
            "Turkish Angoras are elegant and playful cats with silky coats and a love for attention.",
          points: [
            "Affectionate and playful.",
            "Adaptable and good with families.",
            "Requires occasional grooming for silky fur.",
            "Loves interactive playtime.",
          ],
        },
        {
          name: "British Shorthair",
          image: { url: "/images/british-short-hair.jpeg", alt: "British Shorthair Cat" },
          description:
            "British Shorthairs are calm and loyal cats with plush coats and round features.",
          points: [
            "Calm and easygoing personality.",
            "Low-maintenance grooming.",
            "Good with children and other pets.",
            "Tends to be independent but affectionate.",
          ],
        },
        {
          name: "British Longhair",
          image: { url: "/images/british-long-hair.jpeg", alt: "British Longhair Cat" },
          description:
            "The British Longhair is a fluffy, calm, and affectionate breed with a luxurious coat.",
          points: [
            "Gentle and affectionate.",
            "Requires regular grooming.",
            "Good for quieter households.",
            "Beautiful and plush coat.",
          ],
        },
        {
          name: "Ragamuffin",
          image: { url: "/images/ragamuffin.jpeg", alt: "Ragamuffin Cat" },
          description:
            "Ragamuffins are large, affectionate, and gentle cats that enjoy cuddles and playtime.",
          points: [
            "Very affectionate and gentle.",
            "Great with kids and families.",
            "Requires regular grooming for their long fur.",
            "Tends to be a lap cat.",
          ],
        },
        {
          name: "Himalayan",
          image: { url: "/images/himalayan.jpeg", alt: "Himalayan Cat" },
          description:
            "Himalayans are known for their striking blue eyes and luxurious coats, a cross between Persian and Siamese cats.",
          points: [
            "Affectionate and calm.",
            "Grooming-intensive due to thick fur.",
            "Prefers a relaxed environment.",
            "Beautiful and striking appearance.",
          ],
        },
        {
          name: "Ragdoll",
          image: { url: "/images/ragdoll.jpeg", alt: "Ragdoll Cat" },
          description:
            "Ragdolls are large, friendly, and affectionate cats that enjoy human companionship.",
          points: [
            "Affectionate and loves to cuddle.",
            "Good with families and other pets.",
            "Requires regular grooming for long fur.",
            "Relaxed and laid-back personality.",
          ],
        },
        {
          name: "Munchkin",
          image: { url: "/images/munchkin.jpeg", alt: "Munchkin Cat" },
          description:
            "Munchkins are small, playful cats known for their short legs and lively personality.",
          points: [
            "Playful and curious.",
            "Adaptable to different living environments.",
            "Requires minimal grooming.",
            "Very active despite short legs.",
          ],
        },
        {
          name: "Russian Blue",
          image: { url: "/images/russian-blue.jpeg", alt: "Russian Blue Cat" },
          description:
            "Russian Blues are elegant and intelligent cats with striking green eyes and a plush blue-gray coat.",
          points: [
            "Shy but affectionate with family.",
            "Low-maintenance grooming.",
            "Quiet and gentle nature.",
            "Loves interactive play and mental stimulation.",
          ],
        },
        {
          name: "Scottish Fold",
          image: { url: "/images/scottish-fold.jpeg", alt: "Scottish Fold Cat" },
          description:
            "Scottish Folds are known for their unique folded ears and sweet, affectionate personalities.",
          points: [
            "Affectionate and gentle.",
            "Unique folded ears.",
            "Good with families and other pets.",
            "Requires occasional grooming.",
          ],
        },
        {
          name: "Siberian",
          image: { url: "/images/siberian.jpeg", alt: "Siberian Cat" },
          description:
            "Siberians are large, friendly, and hypoallergenic cats with luxurious coats.",
          points: [
            "Hypoallergenic for some people.",
            "Loves to play and interact.",
            "Requires grooming for thick fur.",
            "Adaptable to colder climates.",
          ],
        },
        {
          name: "Sphynx",
          image: { url: "/images/sphynx.jpeg", alt: "Sphynx Cat" },
          description:
            "The Sphynx is a hairless cat known for its unique appearance and playful, affectionate nature.",
          points: [
            "Hairless and requires skin care.",
            "Extremely affectionate and social.",
            "Great with families and other pets.",
            "Loves warmth and cuddles.",
          ],
        },
      ],
    },
  },

  // Post for Cats' Diet
  {
    slug: "cats-diet",
    title: "Cats' Diet",
    content: "Cats have specific nutritional needs that must be met through a balanced diet.",
    details: {
      heading: "Understanding Cats' Diet",
      description: "Cats are obligate carnivores, meaning they require a diet primarily made up of animal-based proteins. It&apos; essential to provide a balanced diet to ensure a cat&apos; overall health and longevity.",
      points: [
        "Protein is essential – cats need animal-based proteins like chicken, beef, or fish.",
        "Taurine – an essential amino acid, helps maintain heart function and vision.",
        "Avoid feeding cats dairy, as many are lactose intolerant.",
        "Hydration is crucial – cats should always have access to fresh water.",
        "Wet food vs. dry food – a combination of both can provide balanced nutrition.",
      ],
      image: { url: "/images/cat-diet.png", alt: "Cat&apos; Diet" },
    },
  },

  // Post for Cats' Health
  {
    slug: "cats-health",
    title: "Cats' Health",
    content: "Maintaining a cat's health involves proper nutrition, regular vet visits, and exercise.",
    details: {
      heading: "Cats' Health – Common Issues & Care",
      description: "Cats' health is often overlooked until a problem arises. Regular veterinary check-ups, proper diet, and adequate exercise are key to a cat&apos; long-term well-being.",
      points: [
        "Regular veterinary visits are crucial for early detection of health issues.",
        "Common health problems include dental disease, obesity, and urinary tract infections.",
        "Parasite prevention (fleas, ticks, worms) is important for overall health.",
        "Vaccinations should be up-to-date to prevent common illnesses.",
        "Mental and physical exercise can prevent obesity and behavioral problems.",
      ],
      image: { url: "/images/health.jpeg", alt: "Cat Health" },
    },
  },
];
