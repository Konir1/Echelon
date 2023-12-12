<template>
  <div class="q-pa-md">
    <div class="header_stuff">
      <h3>Enlisted Ranks</h3>
    </div>
    <div class="cards-container">
      <q-table
        grid
        flat
        :rows="rows"
        :columns="columns"
        row-key="name"
        hide-pagination
        v-model:pagination="pagination"
      >
        <template v-slot:item="props">
          <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4 rank-card">
            <q-card
              flat
              bordered
              style="
                background-color: #090c06;
                color: white;
                border: 1.5px solid #daa520;
                border-radius: 10px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                height: 100%;
              "
            >
              <q-card-section class="text-center">
                <div style="font-family: monospace" class="q-my-md">
                  <strong>{{ props.row.name }}</strong>
                </div>
                <div>
                  <q-img
                    :src="require(`../assets/rank_pics/${props.row.image}.png`)"
                    style="height: 150px; max-width: 150px"
                  />
                </div>
              </q-card-section>
              <q-separator style="background-color: #daa520" />
              <q-card-section
                class="flex flex-center"
                :style="{ fontSize: props.row.calories / 2 + 'px' }"
              >
                <div>{{ props.row.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
    <div class="cards-container">
      <q-table
        grid
        flat
        :rows="chief_rows"
        :columns="columns"
        row-key="name"
        hide-pagination
        v-model:pagination="pagination"
      >
        <template v-slot:item="props">
          <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4 rank-card">
            <q-card
              flat
              bordered
              style="
                background-color: #090c06;
                color: white;
                border: 1.5px solid #daa520;
                border-radius: 10px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                height: 100%;
              "
            >
              <q-card-section class="text-center">
                <div style="font-family: monospace" class="q-my-md">
                  <strong>{{ props.row.name }}</strong>
                </div>
                <div>
                  <q-img
                    :src="require(`../assets/rank_pics/${props.row.image}.png`)"
                    style="height: 150px; max-width: 150px"
                  />
                </div>
              </q-card-section>
              <q-separator style="background-color: #daa520" />
              <q-card-section
                class="flex flex-center"
                :style="{ fontSize: props.row.calories / 2 + 'px' }"
              >
                <div>{{ props.row.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
    <div class="header_stuff">
      <h3>NCO Ranks</h3>
    </div>
    <div class="cards-container">
      <q-table
        grid
        flat
        :rows="nco_rows"
        :columns="columns"
        row-key="name"
        hide-pagination
        v-model:pagination="pagination"
      >
        <template v-slot:item="props">
          <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4 rank-card">
            <q-card
              flat
              bordered
              style="
                background-color: #090c06;
                color: white;
                border: 1.5px solid #daa520;
                border-radius: 10px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                height: 100%;
              "
            >
              <q-card-section class="text-center">
                <div style="font-family: monospace" class="q-my-md">
                  <strong>{{ props.row.name }}</strong>
                </div>
                <div>
                  <q-img
                    :src="require(`../assets/rank_pics/${props.row.image}.png`)"
                    style="height: 150px; max-width: 150px"
                  />
                </div>
              </q-card-section>
              <q-separator style="background-color: #daa520" />
              <q-card-section
                class="flex flex-center"
                :style="{ fontSize: props.row.calories / 2 + 'px' }"
              >
                <div>{{ props.row.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
    <div class="header_stuff">
      <h3>Officer Ranks</h3>
    </div>
    <div class="cards-container">
      <q-table
        grid
        flat
        :rows="officer_rows"
        :columns="columns"
        row-key="name"
        hide-pagination
        v-model:pagination="pagination"
      >
        <template v-slot:item="props">
          <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4 rank-card">
            <q-card
              flat
              bordered
              style="
                background-color: #090c06;
                color: white;
                border: 1.5px solid #daa520;
                border-radius: 10px;
                display: flex;
                justify-content: start;
                flex-direction: column;
                height: 100%;
              "
            >
              <q-card-section class="text-center">
                <div style="font-family: monospace" class="q-my-md">
                  <strong>{{ props.row.name }}</strong>
                </div>
                <div>
                  <q-img
                    :src="require(`../assets/rank_pics/${props.row.image}.png`)"
                    style="height: 150px; max-width: 150px"
                  />
                </div>
              </q-card-section>
              <q-separator style="background-color: #daa520" />
              <q-card-section
                class="flex flex-center"
                :style="{ fontSize: props.row.calories / 2 + 'px' }"
              >
                <div>{{ props.row.description }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>
<style scoped>
.rules {
  margin-top: 20px;
  display: block;
}
.logo {
  height: 250px;
  max-width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.rank-card {
  width: 250px;
}

.header_stuff {
  font-family: "MachineStd";
  color: #daa520;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}

@media only screen and (max-width: 600px) {
  .logo {
    height: 170px;
    max-width: 170px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .rank-card {
    width: 350px;
  }
  .rules {
    width: 100%;
  }
}
</style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "rank-tables",
  data() {
    return {
      columns: [
        {
          name: "rank_name",
          align: "center",
          label: "Rank",
          field: "name",
        },

        {
          name: "rank_description",
          align: "center",
          label: "Rank Description",
          field: "description",
        },
      ],
      rows: [
        {
          name: "Cadet Trooper",
          image: "Cadet Recruit",
          description:
            "Cadet Recruits are the newest Echelon trainees and must attend one operation before becoming a full Trooper",
        },
        {
          name: "Trooper 3rd Class",
          image: "Trooper Third Class",
          description:
            "Trooper 3rd Class are the backbone of Echelon and provide the bulk of the personnel for operations",
        },
        {
          name: "Trooper 2nd Class",
          image: "Trooper Second Class",
          description:
            "Troopers who have demonstrated an improvement in skill and are eligible for Sigil Verification",
        },
        {
          name: "Trooper 1st Class",
          image: "Trooper First Class",
          description:
            "Troopers who have displayed consistent dedication and loyalty to Echelon and demonstrated competency",
        },
        {
          name: "Veteran Trooper",
          image: "Veteran Trooper",
          description:
            "Veteran Troopers are full members of Echelon who have demonstrated basic proficiency in knowledge and skill",
        },
        {
          name: "Senior Trooper",
          image: "Senior Trooper",
          description:
            "Senior Troopers are experienced troopers who are highly capable in a variety of abilities",
        },
        {
          name: "Master Trooper",
          image: "Master Trooper",
          description:
            "Master Troopers are members who have demonstrated mastery in at least one skillset",
        },
      ],
      chief_rows: [
        {
          name: "Chief Trooper",
          image: "Chief Trooper",
          description:
            "Chief Troopers are notable troopers who have displayed high levels of competency and expertise",
        },
        {
          name: "Chief Master Trooper",
          image: "Chief Master Trooper",
          description:
            "Master Chief Troopers are highly competent troopers who are highly proficient in a wide range of skillsets",
        },
        {
          name: "Sentinel",
          image: "Sentinel",
          description:
            "Sentinels are highly distinguished troopers who have demonstrated mastery of skill and dedication in service to Echelon",
        },
      ],
      nco_rows: [
        {
          name: "Lancer",
          image: "Lancer",
          description:
            "Lancers are junior NCOs who are often tasked with basic leadership roles such as leading squads and fireteams ",
        },
        {
          name: "Veteran Lancer",
          image: "Veteran Lancer",
          description:
            "Veterans Lancers are NCOs who have demonstrated proficiency in leadership skills ",
        },
        {
          name: "Senior Lancer",
          image: "Senior Lancer",
          description:
            "Senior Lancers are highly accomplished NCOs who have extensive experience in leadership responsibilities and assisting operation leaders",
        },
        {
          name: "First Lance",
          image: "First Lance",
          description:
            "The First Lance are the highest and most experienced NCOs who are highly capable of leading teams independently to achieve objectives set by the operation leader",
        },
      ],
      officer_rows: [
        {
          name: "Dragoon",
          image: "Dragoon",
          description:
            "Dragoons are the longest serving and most experienced Echelon members. Dragoons are equivalent in rank to Lance Captains, but assume no leadership responsibilities and instead act as advisors for the leadership and mentors for less experienced members",
        },
        {
          name: "Lance Captain",
          image: "Lance Captain",
          description:
            "Lance Captains are the principal operational officers in Echelon. Lance Captains are skilled leaders, with some specializing in certain areas of expertise, while others remain as generalists",
        },
        {
          name: "Deputy Marshal",
          image: "Deputy Marshal",
          description:
            "The Deputy Marshals are the operational and administrative officers who assist the Marshal with day-to-day operations",
        },
        {
          name: "Regimental Adjutant",
          image: "Adjutant",
          description:
            "The Regimental Adjutant is a ceremonial role in Echelon and is responsible for administration and other bureaucratic duties for Echelon",
        },
        {
          name: "Marshal",
          image: "Marshal",
          description:
            "The Marshal is the highest ranking officer in Echelon. The Marshal is responsible for overseeing operations, conducting joint operations with allied regiments, delegating responsibilities, and other administrative tasks",
        },
      ],

      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 21,
      },
    };
  },
});
</script>
