<template>
  <div class="q-pa-md bg-primary text-center fixed-center">
    <q-list
      dark
      bordered
      style="max-width: 900px; flex-wrap: wrap; max-height: 600px"
      class="text-secondary"
    >
      <q-item class="content">
        <q-item-section>
          <q-item-label overline class="header"
            >History of Echelon</q-item-label
          >
          <q-item-label
            >Echelon [ECH], formally, the Colonial Legion Echelon, was founded
            in October of 2020. Originally, the clan was reformed out of the
            former and short lived Colonial Pathfinders [PF] clan which focused
            primarily on reconnaissance and partisan operations. After
            reforming, Echelon was formally founded as a logistics and support
            unit primarily tasked with providing logistical supply runs to
            allied fronts. Soon there after in November of 2020, ECH re-mustered
            as a combined arms clan encompassing a wide variety of roles within
            its ranks from logistics and engineering to infantry, artillery,
            armoured, and amphibious operations. This could be seen in the
            clan’s variety of operation types including the tragic defeat and
            slaughter of the clan and allies in a failed naval landing on the
            21st of December, 2020. However, this is and was some speculation
            that this was at least in part due to failed allied-clan
            intelligence and information security. Shortly after this event,
            however, ECH successfully conducted naval landing operations as
            infantry and armoured elements in the Skull Beach landing of World
            Conquest 67, which would ultimately end the war with a Colonial
            victory. <br />
            <br />This period of time (December 2020) additionally saw ECH’s
            membership grow exponentially opening many doors for the future of
            the clan and its ambitions. Throughout this period ECH launched the
            ‘Moon Lake Project’ sometime during or before WC 66 in which the
            clan was preparing to construct and fire a ballistic missile
            (nuclear weapon). This would finally culminate in ECH firing its
            first nuke in World Conquest 68 (January 2021) at the end of the war
            effectively ending it. Albeit was a Warden victory, ECH saw fit to
            destroy the last Warden victory point in Hermit’s Rest’s town hall,
            rather than have Colonials sitting around waiting to lose.
            Throughout the spring and summer of 2021, ECH would continue to grow
            and begin solidifying various aspects of clan organization. This
            included a robust rank structure, the introduction of qualification
            tabs, medals and awards, and subdivisions of the clan i.e. corps and
            detachments. <br />
            <br />In October of 2021 Echelon celebrated its first year
            anniversary. For the remainder of the year ECH would embark on
            numerous base building projects, and ramp up its logistical
            efficiency. By the end of the year Echelon had established itself as
            a self sufficient and notable clan within the Colonial and broader
            Foxhole community. For much of the first half of 2022 ECH had run
            business as usual with regular ops, projects, etc. However, in the
            summer of 2022 ECH began a process of re-organizing its roster
            accounting for active and inactive personnel to paint a more
            realistic picture of its battlefield and support capabilities.
            Ultimately, by the end of summer 2022 ECH has set itself up for the
            highly anticipated 1.0 release in September 2022 ready and eager to
            adapt to the new dynamics of Foxhole for better or for
            worse.</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<style>
.header {
  font-size: larger;
}
.content {
  inline-size: 900px;
  overflow: hidden;
  font-size: 0.8vw;
}

@media only screen and (max-width: 600px) {
  .header {
    height: 70px;
    max-width: 70px;
    margin-left: auto;
    margin-right: auto;
    font-size: 10px;
  }
  .content {
    width: fit-content;
    max-height: fit-content;
    font-size: 3vw;
    word-wrap: break-word;
    inline-size: 350px;
  }
}
</style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "aboutCard",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
});
</script>
