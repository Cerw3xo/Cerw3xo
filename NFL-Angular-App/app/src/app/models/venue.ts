export interface Venue { 
        id: string;
        fullName: string;
        indoor: boolean;

        adress: {
          city: string;
        }

        images: {
          [0]: {
            href: string;
          };
        };
      };
    

