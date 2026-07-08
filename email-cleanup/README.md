# Email Organization — Setup Guide

Built for **riajohn.design@gmail.com** on 2026-04-21.

This folder contains two things:

1. `mailFilters.xml` — a Gmail filter import file that will automatically sort incoming and existing mail into three labels: **Jobs**, **Newsletters**, **Junk**.
2. This README, with step-by-step instructions and one-click Gmail search links so you can mass-unsubscribe from junk senders.

---

## Step 1 — Create the three labels

Gmail needs the labels to exist before it can apply them.

1. Open Gmail.
2. In the left sidebar, scroll down and click **Create new label** (or Settings → See all settings → Labels → Create new label).
3. Create exactly these three labels (names are case-sensitive in the filter file):
   - `Jobs`
   - `Newsletters`
   - `Junk`

## Step 2 — Import the filters

1. Go to **Settings (gear icon) → See all settings → Filters and Blocked Addresses**.
2. At the bottom, click **Import filters**.
3. Choose `mailFilters.xml` from this folder.
4. Click **Open file** → review the 5 filters → click **Create filters**.
5. On the confirmation page, **tick the box "Also apply filter to matching conversations"** before clicking Create. This is what makes it retroactively label existing mail.

That's it — Gmail will label and (for Junk) archive everything that matches.

---

## What the filters do

| Label | Senders matched | Action |
|---|---|---|
| Jobs | ZipRecruiter, Lensa, Wellfound, Aquent, LinkedIn, Indeed, Glassdoor, Hired, Built In, Dribbble + subject lines like "is hiring", "may want to hire you", "UX Designer" | Apply **Jobs** label, keep in inbox |
| Newsletters | Substack (any author), Medium, Anthropic/Claude emails, Cursor, Supabase, Koi Studios | Apply **Newsletters** label, keep in inbox |
| Junk | Staples, Fabletics, SafeOpt, MasterClass, BrainStation, HubSpot, Leland, Paperless Post + any promo-keyword email in the Promotions category | Apply **Junk** label, **archive** (removed from inbox but findable under the label) |

---

## Step 3 — Unsubscribe from Junk at the source (optional but recommended)

Archiving just hides them. To stop them coming in, click the links below — each opens a Gmail search for that sender. Select all, then click Gmail's built-in **Unsubscribe** link at the top of any message, or use Gmail's "Block sender" option.

| Sender | One-click Gmail search |
|---|---|
| Staples promos | https://mail.google.com/mail/u/0/#search/from%3Astaples%40connected.staples.com |
| Fabletics | https://mail.google.com/mail/u/0/#search/from%3A%40emails.fabletics.com |
| SafeOpt (Fabletics partner) | https://mail.google.com/mail/u/0/#search/from%3A%40safeopt.com |
| MasterClass | https://mail.google.com/mail/u/0/#search/from%3Asupport%40email.masterclass.com |
| BrainStation | https://mail.google.com/mail/u/0/#search/from%3A%40brainstation.io |
| HubSpot | https://mail.google.com/mail/u/0/#search/from%3Athehubspotteam%40hubspot.com |
| Leland | https://mail.google.com/mail/u/0/#search/from%3A%40joinleland.com |
| Paperless Post | https://mail.google.com/mail/u/0/#search/from%3Ahelp%40email.paperlesspost.com |

**Bulk unsubscribe workflow:** open the search link → click the checkbox at the top to "select all conversations that match" → look at the top of any one message for the "Unsubscribe" link Gmail auto-detects → click once → then you can mass-delete the remaining archived mail if you want.

---

## What the filters intentionally did NOT touch

These I left alone because they're either important, ambiguous, or personal:

- **Security alerts** from `no-reply@accounts.google.com`, `no-reply@google.com`
- **Receipts and invoices** from `invoice+statements@mail.anthropic.com`, `no-reply@squarespace.com`
- **Event invites** from Luma (`@user.luma-mail.com`) — these looked personal (Women in Design NYC, Code & Coffee, workshops)
- **Job application codes** like `noreply-...@aquent.com` when it's a verification code, not a job alert
- Anything from actual people (non-bulk senders)

If you want these swept into a label too, tell me which and I'll extend the filter file.

---

## Step 4 — Keep future mail tidy

The filters apply to incoming mail automatically. So from today onward, any Substack will go to Newsletters, any ZipRecruiter alert to Jobs, any Staples promo straight to Junk + archived. Nothing more to do.

If new promo senders show up over time, just come back and I can add them.

---

## Caveats — worth knowing

- **Sample-based.** I scanned ~100 recent threads. If you have senders outside that window that aren't caught, they won't be filtered until you add them. Re-run this in a month and we can catch stragglers.
- **`from:` is by domain.** The filter matches anything from those domains. That's intentional — it catches every Substack author, every ZipRecruiter flavor, etc. — but in rare cases a legit email from the same domain could get labeled. Worth a quick scan through Junk the first day after import.
- **Gmail's Promotions tab** may already hide some of these. The Junk filter adds a label on top of that, so they're findable.
- **Subject filters are aggressive.** The "promo subject" filter catches generic phrases like "% off" and "today only". A legit email with those words could sneak in. If that happens, check Junk and let me know — I'll tighten it.
